import { Injectable } from '@nestjs/common';
import { NewsItemRSS } from './models/news_item_rss';
import { parseRssFeed } from '../utils/rss/parse_feed';
import { PublisherService } from '../publisher/publisher.service';
import {
  NewsItem,
  NewsItemCreateInput,
  PublisherSource,
  SourceType,
} from '../../../../graphql/generated/graphql';
import { saveFileByUrl } from '../utils/file.utils';
import { NewsService } from './news.service';
import { normalizeYouTubeXMLFeedData } from '../utils/youtube/normalize_youtube_xml_video_data';
import { parseYouTubeXMLFeed } from '../utils/youtube/parse_youtube_xml';
import { NewsItemYouTube } from './models/news_item_youtube';

@Injectable()
export class AggregationService {
  constructor(private readonly newsService: NewsService) {}

  async aggregateNewsBySources(
    sources: PublisherSource[]
  ): Promise<NewsItemCreateInput[]> {
    const items: NewsItemCreateInput[] = [];

    await Promise.all(
      sources.map(async (source) => {
        if (source.type == 'rss' && source.rss?.url) {
          const feed = await parseRssFeed(source.rss.url);
          let feedItems = feed.items;

          console.log('Feed items count: ', feedItems.length);

          const newsItems = feedItems.map((item) =>
            NewsItemRSS.fromNewsFeedItem(item, source)
          );
          const normalisedNewsItems = await Promise.all(
            newsItems.map((newsItems) =>
              this.newsService.normalizeNewsItemFromRSS(newsItems)
            )
          );
          const inputs = await Promise.all(
            normalisedNewsItems.map(async (item) => {
              const coverUrl = item?.data.coverUrl;
              if (coverUrl) {
                const coverFile = await saveFileByUrl({
                  url: coverUrl,
                  key: `public/news/rss/${item.data.url}/cover`,
                });
                const input = item.toInput();
                input.cover = {
                  create: coverFile,
                };
                return input;
              } else {
                return item.toInput();
              }
            })
          );
          items.push(...inputs);
        }
        if (source.type == 'youtube') {
          // Fetch and parse the YouTube XML feed
          const feed = await parseYouTubeXMLFeed(source.youtube.channelID);
          const feedItems = feed.entry;
          let normalisedNewsItems = normalizeYouTubeXMLFeedData(feedItems)
            .map(
              (item) =>
                item &&
                NewsItemYouTube.fromNormalizedYouTubeXMLItem(item, source)
            )
            .filter(Boolean);
          const inputs = await Promise.all(
            normalisedNewsItems.map(async (item) => {
              const coverUrl = item.data.coverUrl;
              if (coverUrl) {
                const titleBase64 = Buffer.from(item.data.title).toString();
                const coverFile = await saveFileByUrl({
                  url: coverUrl,
                  key: `public/news/youtube/${titleBase64}/cover`,
                });
                const input = item.toInput();
                input.cover = {
                  create: coverFile,
                };
                return input;
              } else {
                return item.toInput();
              }
            })
          );
          items.push(...inputs);
        }
      })
    );
    console.log('Items to add count: ', items.length);
    return items;
  }
}
