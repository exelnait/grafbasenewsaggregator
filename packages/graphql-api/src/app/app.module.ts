import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PublisherModule } from '../publisher/publisher.module';
import { NewsItemModule } from '../news/news.module';
import { HealthModule } from '../health/health.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    HealthModule,
    PublisherModule,
    NewsItemModule,
  ],
})
export class AppModule {}
