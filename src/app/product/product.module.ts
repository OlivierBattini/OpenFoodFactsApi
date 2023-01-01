import { CacheModule, Module } from '@nestjs/common';

import { Env } from '../../config/env';
import { DatabaseModule } from '../data/database.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: Env.HTTP_CACHE_TTL_MS,
    }),
    DatabaseModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
