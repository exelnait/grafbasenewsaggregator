import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NewsItem {
  @Field((type) => String)
  id: number;
}
