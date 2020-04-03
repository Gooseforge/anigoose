import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnimeEntity } from './anime.entity';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnimeEntity])],
  controllers: [AnimeController],
  providers: [AnimeService],
  exports: [AnimeService]
})
export class AnimeModule {}
