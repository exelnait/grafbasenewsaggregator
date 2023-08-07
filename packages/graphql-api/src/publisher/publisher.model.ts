import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Publisher {
  @Field((type) => String)
  id: number;
}
