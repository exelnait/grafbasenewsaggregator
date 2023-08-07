import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AggregationService } from './aggregation.service';
import { SourceType } from '../../../../graphql/generated/graphql';
import { PublisherService } from '../publisher/publisher.service';
import { NewsService } from './news.service';
import { NewsItem } from './newitem.model';

@Resolver(() => NewsItem)
export class AggregationResolver {
  constructor(
    private readonly publisherService: PublisherService,
    private readonly aggregationService: AggregationService,
    private readonly newsService: NewsService
  ) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => [NewsItem])
  async aggregateNewsByType(@Args('type') type?: string) {
    const sources = await this.publisherService.getAllPublisherSourcesByType(
      type as SourceType
    );
    const newsItemCreateInputs =
      await this.aggregationService.aggregateNewsBySources(sources);

    console.log('News create count: ', newsItemCreateInputs.length);
    const news = await this.newsService.createNewsItems(newsItemCreateInputs);

    console.log('News count: ', news.length);

    return news;
  }
}
