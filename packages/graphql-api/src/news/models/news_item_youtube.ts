import {
  NewsItemCreateInput,
  PublisherSource,
  SourceType,
} from '../../../../../graphql/generated/graphql';
import { INormalizedYouTubeVideo } from '../../utils/youtube/normalize_youtube_xml_video_data';

interface ICaption {
  text: string;
  start: number;
  duration: number;
}

interface INewsItemYouTubeData {
  title: string;
  description: string;
  publisherId: string;
  creatorId: string;
  topicId: string;
  publishedDate: string;
  videoId: string;
  coverUrl: string;
  captions?: ICaption[];
  summary?: string;
}

export class NewsItemYouTube {
  data: INewsItemYouTubeData;

  constructor(data: INewsItemYouTubeData) {
    this.data = data;
  }

  static fromNormalizedYouTubeXMLItem(
    item: INormalizedYouTubeVideo,
    source: PublisherSource
  ): NewsItemYouTube {
    return new NewsItemYouTube({
      title: item.title,
      description: item.description,
      publisherId: source.publisher.id,
      creatorId: source.creator,
      topicId: source.topic.id,
      publishedDate: item.published_date,
      videoId: item.video_id,
      coverUrl: item.cover,
    });
  }

  toInput(): NewsItemCreateInput {
    const {
      title,
      description,
      publisherId,
      creatorId,
      topicId,
      publishedDate,
      videoId,
      coverUrl,
      summary,
      captions,
    } = this.data;
    return {
      title,
      description,
      type: 'youtube' as SourceType,
      publisher: {
        link: publisherId,
      },
      topic: {
        link: topicId,
      },
      publishedAt: publishedDate,
      youtube: {
        videoId,
        coverUrl,
        captions,
        summary,
      },
      creator: creatorId,
    };
  }
}
