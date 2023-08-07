import { Test, TestingModule } from '@nestjs/testing';
import { PublisherResolver } from './publisher.resolver';
import { PublisherService } from './publisher.service';

describe('PublisherResolver', () => {
  let resolver: PublisherResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublisherResolver, PublisherService],
    }).compile();

    resolver = module.get<PublisherResolver>(PublisherResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
