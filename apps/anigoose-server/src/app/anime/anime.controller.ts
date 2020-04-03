import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AnimeEntity } from './anime.entity';
import { AnimeService } from './anime.service';

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @ApiResponse({ status: 200, type: AnimeEntity, isArray: true })
  @Get()
  async getAnimeList(@Query() { page = { offset: 0, limit: 20 } }) {
    let { offset, limit } = page;

    offset = Number(offset) || 0;
    limit = Number(limit) | 20;

    return await this.animeService.findList({ offset, limit });
  }
}
