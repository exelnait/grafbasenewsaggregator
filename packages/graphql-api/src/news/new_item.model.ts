import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NewsItemRSS {
  @Field((type) => String)
  contentHtml: string;
  @Field((type) => String)
  summary: string;
}

@ObjectType()
export class NewsItemYouTube {
  @Field((type) => String)
  summary: string;
}

@ObjectType()
export class NewsItem {
  @Field((type) => String)
  id: number;

  @Field((type) => NewsItemRSS, { nullable: true })
  rss: NewsItemRSS;
  @Field((type) => NewsItemYouTube, { nullable: true })
  youtube: NewsItemYouTube;
}
