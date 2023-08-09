import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AggregationService } from './aggregation.service';
import { SourceType } from '../../../../graphql/generated/graphql';
import { PublisherService } from '../publisher/publisher.service';
import { NewsService } from './news.service';
import { NewsItem } from './new_item.model';
import { NewsItemRSS } from './models/news_item_rss';
import { NewsItemYouTube } from './models/news_item_youtube';
import { summarizeArticle } from '../utils/text.utils';
import { convertHtmlToText } from '../utils/rss/convert_html_to_text';

@Resolver(() => NewsItem)
export class NewsResolver {
  constructor(
    private readonly publisherService: PublisherService,
    private readonly aggregationService: AggregationService,
    private readonly newsService: NewsService
  ) {}

  @Query(() => NewsItem)
  async getNewsItem(@Args('id') id?: string) {
    const item = await this.newsService.getNewsItem(id);
    if (item.type === SourceType.Rss) {
      let updatedRSS = null;
      console.log(Object.keys(item.rss));
      if (!item.rss.contentHtml) {
        console.log('Normalizing article');
        const normalized = await this.newsService.normalizeNewsItemFromRSS({
          data: {
            url: item.rss.url,
          },
        } as NewsItemRSS);
        item.rss.contentHtml = normalized.data.contentHtml;
        updatedRSS = {
          ...item.rss,
          contentHtml: normalized.data.contentHtml,
          contentJson: normalized.data.contentJson,
          coverUrl: normalized.data.coverUrl,
        };
      }
      if (!item.rss.summary) {
        console.log('Summarizing article');
        const content = convertHtmlToText(item.rss.contentHtml);
        const summary = await summarizeArticle(content);
        updatedRSS = {
          ...item.rss,
          ...(updatedRSS ?? {}),
          summary,
        };
      }
      if (updatedRSS) {
        const updatedItem = await this.newsService.updateNewsItem(item.id, {
          rss: updatedRSS,
        });
        item.rss = {
          ...item.rss,
          ...updatedItem.rss,
        };
      }
    }
    if (item.type === SourceType.Youtube && !item.youtube.captions) {
      const normalized = await this.newsService.normalizeNewsItemFromYouTube({
        data: {
          videoId: item.youtube.videoId,
        },
      } as NewsItemYouTube);
      const updatedItem = await this.newsService.updateNewsItem(item.id, {
        youtube: {
          videoId: item.youtube.videoId,
          captions: normalized.data.captions,
          summary: normalized.data.summary,
        },
      });
      item.youtube = {
        ...item.youtube,
        ...updatedItem.youtube,
      };
    }
    return item;
  }

  @Mutation(() => [NewsItem])
  async aggregateNewsByType(@Args('type') type?: string) {
    const sources = await this.publisherService.getAllPublisherSourcesByType(
      type as SourceType
    );
    const newsItemCreateInputs =
      await this.aggregationService.aggregateNewsBySources(sources);

    console.log('News create count: ', newsItemCreateInputs.length);
    const news = await this.newsService.createNewsItems(newsItemCreateInputs);

    console.log('News count: ', news.length);

    return news;
  }
}
