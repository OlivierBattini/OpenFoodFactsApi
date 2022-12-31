import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DatabaseService } from './database.service';
import { Env } from '../../config/env';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: Env.DB_URL,
      }),
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
