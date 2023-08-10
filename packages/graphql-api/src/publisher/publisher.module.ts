import { Global, Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherResolver } from './publisher.resolver';
import { NewsItemModule } from '../news/news.module';

@Global()
@Module({
  imports: [NewsItemModule],
  providers: [PublisherResolver, PublisherService],
})
export class PublisherModule {}
