import { Global, Module } from '@nestjs/common';
import { AggregationService } from './aggregation.service';
import { NewsResolver } from './news.resolver';
import { PublisherService } from '../publisher/publisher.service';
import { NewsService } from './news.service';

@Global()
@Module({
  providers: [NewsResolver, AggregationService, PublisherService, NewsService],
})
export class NewsItemModule {}
