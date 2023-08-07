import { Controller, Get } from '@nestjs/common';

const CLUSTER_RAM_MB = 512;
const CLUSTER_RAM_MB_THRESHOLD = CLUSTER_RAM_MB * 0.8;

import {
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private memory: MemoryHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      async () =>
        this.memory.checkHeap(
          'memory_heap',
          CLUSTER_RAM_MB_THRESHOLD * 1024 * 1024
        ),
      async () =>
        this.memory.checkRSS(
          'memory_rss',
          CLUSTER_RAM_MB_THRESHOLD * 1024 * 1024
        ),
    ]);
  }
}
