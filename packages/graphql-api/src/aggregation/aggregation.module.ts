import { Global, Module } from '@nestjs/common';
import { AggregationService } from './aggregation.service';
import { AggregationResolver } from './aggregation.resolver';
import { PublisherService } from '../publisher/publisher.service';
import { NewsService } from './news.service';

@Global()
@Module({
  providers: [
    AggregationResolver,
    AggregationService,
    PublisherService,
    NewsService,
  ],
})
export class AggregationModule {}
