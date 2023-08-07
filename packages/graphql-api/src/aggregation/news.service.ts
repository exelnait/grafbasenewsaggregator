import { Injectable } from '@nestjs/common';
import {
  NewsItem,
  NewsItemCreateInput,
  PublisherSource,
} from '../../../../graphql/generated/graphql';
import { performance } from 'perf_hooks';
import { randomUUID } from 'crypto';
import { parseArticle } from '../utils/rss/article_parsing';
import { getDomain } from '../utils/rss/rss_utils';
import { normalizeHtml } from '../utils/rss/normalize_html';
import { convertHtmlToJson } from '../utils/rss/convert_html_to_json';
import { saveFileByUrl } from '../utils/file.utils';
import { NewsItemRSS } from './models/news_item_rss';

@Injectable()
export class NewsService {
  constructor() {}

  async normalizeNewsItemFromRSS(data: NewsItemRSS): Promise<NewsItemRSS> {
    try {
      const item = data.data;
      const startTime = performance.now();
      const parsedArticle = await parseArticle(item.url);
      const parsingTime = performance.now();
      console.log(`Parsing time: ${performance.now() - startTime}ms`);

      const normalizeContentTime = performance.now();
      const domain = getDomain(item.url);
      const normalizedHtml = normalizeHtml({
        html: parsedArticle.content,
        domain,
        coverUrl: parsedArticle.lead_image_url,
      });
      const htmlJson = await convertHtmlToJson(normalizedHtml, {
        requestImageDimensions: false,
      });
      item.coverUrl = parsedArticle.lead_image_url;
      item.contentHtml = normalizedHtml;
      item.contentJson = JSON.stringify(htmlJson);
      console.log(
        `Normalize content time: ${normalizeContentTime - parsingTime}ms`
      );

      console.log(
        `Normalize news item time: ${performance.now() - startTime}ms`
      );
      return data;
    } catch (e) {
      console.log('normalizeNewsItemFromRSS Error', e.message);
      return null;
    }
  }

  async createNewsItems(input: NewsItemCreateInput[]): Promise<NewsItem[]> {
    const data = await fetch(process.env.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.GRAFBASE_API_KEY,
      },

      body: JSON.stringify({
        operationName: 'CreateNewsItem',
        query: `
    mutation CreateNewsItem($input: [NewsItemCreateManyInput!]!) {
    newsItemCreateMany(input: $input) {
      newsItemCollection {
          id
      }
    }
  }
`,
        variables: {
          input: input.map((item) => ({
            input: item,
          })),
        },
      }),
    });
    const response = await data.json();
    if (response.errors?.length > 0) {
      throw new Error(response.errors[0].message);
    }
    const news: NewsItem[] =
      response.data.newsItemCreateMany.newsItemCollection;
    return news;
  }
}
