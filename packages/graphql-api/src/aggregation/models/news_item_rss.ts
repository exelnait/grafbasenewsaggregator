import {
  NewsItemCreateInput,
  PublisherSource,
  SourceType,
} from '../../../../../graphql/generated/graphql';
import { Item } from 'rss-parser';

interface INewsItemRSSData {
  title: string;
  description: string;
  publisherId: string;
  creatorId: string;
  topicId: string;
  publishedDate: string;
  url: string;
  categories: string[];
  author: string;
  coverUrl?: string;
  contentHtml?: string;
  contentJson?: string;
}

export class NewsItemRSS {
  data: INewsItemRSSData;

  constructor(data: INewsItemRSSData) {
    this.data = data;
  }

  static fromNewsFeedItem(item: Item, source: PublisherSource): NewsItemRSS {
    return new NewsItemRSS({
      title: item.title,
      description: item.contentSnippet,
      publisherId: source.publisher.id,
      creatorId: source.creator,
      topicId: source.topic.id,
      publishedDate: item.isoDate,
      url: item.link,
      categories: item.categories,
      author: item.creator,
    });
  }

  toInput(): NewsItemCreateInput {
    const {
      title,
      description,
      publisherId,
      creatorId,
      topicId,
      url,
      categories,
      author,
      publishedDate,
      coverUrl,
      contentHtml,
      contentJson,
    } = this.data;
    return {
      title,
      description,
      type: 'rss' as SourceType,
      publisher: {
        link: publisherId,
      },
      topic: {
        link: topicId,
      },
      creator: creatorId,
      publishedAt: publishedDate,
      rss: {
        url,
        categories,
        author,
        coverUrl,
        contentHtml,
        contentJson,
      },
    };
  }
}
