import { Injectable } from '@nestjs/common';
import {
  NewsItem,
  NewsItemCreateInput,
  NewsItemUpdateInput,
  PublisherSource,
} from '../../../../graphql/generated/graphql';
import { performance } from 'perf_hooks';
import { parseArticle } from '../utils/rss/article_parsing';
import { getDomain } from '../utils/rss/rss_utils';
import { normalizeHtml } from '../utils/rss/normalize_html';
import { convertHtmlToJson } from '../utils/rss/convert_html_to_json';
import { NewsItemRSS } from './models/news_item_rss';
import { NewsItemYouTube } from './models/news_item_youtube';
import { getVideoTranscript } from '../utils/youtube/transcript_youtube';
import { summarizeVideoCaptions, summarizeArticle } from '../utils/text.utils';

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
      console.log(item.coverUrl);
      return data;
    } catch (e) {
      console.log('normalizeNewsItemFromRSS Error', e.message);
      return data;
    }
  }

  async normalizeNewsItemFromYouTube(
    data: NewsItemYouTube
  ): Promise<NewsItemYouTube> {
    const item = data.data;
    const startTime = performance.now();
    const videoTranscript = await getVideoTranscript(item.videoId);
    const summarizeTime = performance.now();
    console.log(`Transcript time: ${performance.now() - startTime}ms`);
    data.data.captions = videoTranscript.map((item) => ({
      text: item.text,
      start: item.offset,
      duration: item.duration,
    }));

    const content = videoTranscript.map((item) => item.text).join(' ');
    const summary = await summarizeVideoCaptions(content);
    console.log(`Summarize time: ${performance.now() - summarizeTime}ms`);
    data.data.summary = summary;
    return data;
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

  async updateNewsItem(
    id: string,
    input: NewsItemUpdateInput
  ): Promise<NewsItem> {
    const data = await fetch(process.env.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.GRAFBASE_API_KEY,
      },

      body: JSON.stringify({
        operationName: 'NewsItemUpdate',
        query: `
    mutation NewsItemUpdate($id: ID!, $input: NewsItemUpdateInput!) {
    newsItemUpdate(by: {id: $id}, input: $input) {
        newsItem {
            id
           youtube {
            videoId
            coverUrl
            captions {
                duration
                start
                text
            }
            summary
        }
        rss {
            contentHtml
            contentJson
            coverUrl
            url
            categories
            author
            summary
        }
        }
    }
}
`,
        variables: {
          id,
          input,
        },
      }),
    });
    const response = await data.json();
    if (response.errors?.length > 0) {
      throw new Error(response.errors[0].message);
    }
    return response.data.newsItemUpdate.newsItem;
  }

  async getNewsItem(id: string): Promise<NewsItem> {
    const data = await fetch(process.env.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.GRAFBASE_API_KEY,
      },

      body: JSON.stringify({
        operationName: 'GetNewsItem',
        query: `
    query GetNewsItem($id: ID!) {
    newsItem(by: {id: $id}) {
        id
        youtube {
            videoId
            coverUrl
            captions {
                duration
                start
                text
            }
            summary
        }
        rss {
            contentHtml
            contentJson
            coverUrl
            summary
            url
            categories
            author
        }
        topic {
            id
            title
        }
        publisher {
            id
            title
        }
        title
        type
        cover {
            bucket
            key
            url
        }
    }
}
`,
        variables: {
          id,
        },
      }),
    });
    const response = await data.json();
    if (response.errors?.length > 0) {
      throw new Error(response.errors[0].message);
    }
    return response.data.newsItem;
  }
}
