import { Global, Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherResolver } from './publisher.resolver';

@Global()
@Module({
  providers: [PublisherResolver, PublisherService],
})
export class PublisherModule {}
