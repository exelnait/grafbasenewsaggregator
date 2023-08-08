import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { PublisherService } from './publisher.service';

import {
  PublisherToPublisherSourceCreatePublisherSourceRelation,
  SourceType,
} from '../../../../graphql/generated/graphql';
import { saveFileByUrl } from '../utils/file.utils';
import { Publisher } from './publisher.model';
import { CreatePublisherInput } from './publisher.input';
import {
  getChannelInfoById,
  getChannelInfoByUsername,
} from '../utils/youtube/youtube_api';

@Resolver(() => Publisher)
export class PublisherResolver {
  constructor(private readonly publisherService: PublisherService) {}

  @Mutation(() => Publisher)
  async createPublisher(
    @Args('input') input: CreatePublisherInput
  ): Promise<Publisher> {
    let avatarUrl = input.avatarUrl;
    const sourceRelations: PublisherToPublisherSourceCreatePublisherSourceRelation[] =
      await Promise.all(
        input.sources
          .map(async (source) => {
            if (source.type == SourceType.Rss) {
              return {
                create: {
                  isHidden: false,
                  type: SourceType.Rss,
                  title: 'RSS',
                  creator: input.creatorID,
                  topic: {
                    link: input.topicID,
                  },
                  rss: {
                    url: source.rss.url,
                  },
                },
              };
            }
            if (source.type == SourceType.Youtube) {
              if (source.youtube.url) {
                let channelInfo;
                if (source.youtube.url.includes('channel')) {
                  source.youtube.channelID =
                    source.youtube.url.split('channel/')[1];
                  channelInfo = await getChannelInfoById(
                    source.youtube.channelID
                  );
                } else {
                  source.youtube.username = source.youtube.url
                    .split('youtube.com/')[1]
                    .replace('@', '');
                  channelInfo = await getChannelInfoByUsername(
                    source.youtube.username
                  );
                  if (!avatarUrl) {
                    avatarUrl = channelInfo.thumbnails.default.url;
                  }
                  source.youtube.channelID = channelInfo.channelId;
                }
              }
              return {
                create: {
                  isHidden: false,
                  type: SourceType.Youtube,
                  creator: input.creatorID,
                  title: 'YouTube',
                  topic: {
                    link: input.topicID,
                  },
                  youtube: {
                    username: source.youtube.username,
                    channelID: source.youtube.channelID,
                  },
                },
              };
            }
            return null;
          })
          .filter(Boolean)
      );

    let avatarFile = {
      bucket: '',
      key: '',
    };
    try {
      if (avatarUrl) {
        avatarFile = await saveFileByUrl({
          url: avatarUrl,
          key: `public/publisher/${input.title.toLowerCase()}/avatar`,
        });
      }
    } catch (e) {
      console.error(e);
    }
    console.log('avatarFile', avatarFile);

    // const createdPublisher = await this.publisherService.createdPublisher({
    //   title: input.title,
    //   topicID: input.topicID,
    //   avatarBucket: avatarFile.bucket,
    //   avatarKey: avatarFile.key,
    //   creatorID: input.creatorID,
    //   sourceRelations,
    // });
    // return createdPublisher;
    return null;
  }
}
