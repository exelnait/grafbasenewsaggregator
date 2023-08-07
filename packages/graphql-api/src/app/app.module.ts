import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PublisherModule } from '../publisher/publisher.module';
import { AggregationModule } from '../aggregation/aggregation.module';
import { HealthModule } from '../health/health.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    HealthModule,
    PublisherModule,
    AggregationModule,
  ],
})
export class AppModule {}
