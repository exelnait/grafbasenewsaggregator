import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
class CreatePublisherSourceRSSInput {
  @Field()
  url: string;
}

@InputType()
class CreatePublisherSourceYoutubeInput {
  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  channelID?: string;

  @Field({ nullable: true })
  url?: string;
}

@InputType()
class CreatePublisherSourceTwitterInput {
  @Field()
  username: string;
}

@InputType()
class CreatePublisherSourceCustomInput {
  @Field((type) => String)
  type: 'rss' | 'youtube';

  @Field((type) => CreatePublisherSourceRSSInput, { nullable: true })
  rss?: CreatePublisherSourceRSSInput;

  @Field((type) => CreatePublisherSourceYoutubeInput, { nullable: true })
  youtube?: CreatePublisherSourceYoutubeInput;

  @Field((type) => CreatePublisherSourceTwitterInput, { nullable: true })
  twitter?: CreatePublisherSourceTwitterInput;

  @Field((type) => CreatePublisherSourceRSSInput, { nullable: true })
  itunes?: CreatePublisherSourceRSSInput;
}

@InputType()
export class CreatePublisherInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  avatarUrl?: string;

  @Field((type) => ID)
  topicID: string;

  @Field()
  creatorID: string;

  @Field({ nullable: true })
  websiteUrl?: string;

  @Field((type) => [CreatePublisherSourceCustomInput])
  sources: CreatePublisherSourceCustomInput[];
}
