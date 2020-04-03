import Axios from 'axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';

import { AnimeEntity } from './anime.entity';
import { Repository } from 'typeorm';
import { AnimeDTO } from '@anigoose/core';

const KitsuService = Axios.create({
  baseURL: `https://kitsu.io/api/edge`,
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
  },
  timeout: 6 * 1000
});

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(AnimeEntity) private repo: Repository<AnimeEntity>
  ) {}

  async findList({ offset, limit }): Promise<AnimeEntity[]> {
    await this._findById(1);

    return null;
  }

  async findById(id: number): Promise<AnimeEntity> {
    return null;
  }

  async findByName(name: string): Promise<AnimeEntity | AnimeEntity[]> {
    return null;
  }

  /**
   * Remote: Query By ID
   * @description Tries to query an anime on Kitsu database by ID.
   * @param id Anime ID For Kitsu Query
   * @returns {AnimeDTO} Returns a Kitsu anime response normalized for Anigoose.
   */
  private async _findById(id: number): Promise<AnimeDTO> {
    try {
      const { data: resource } = await KitsuService.get(`/anime/${id}`);
      const anime: AnimeDTO = Object.assign(new AnimeDTO(), {
        id: resource.data.id,
        ...resource.data.attributes
      });

      const errors = await validate(anime, {
        validationError: { target: false, value: false }
      });
      if (errors && errors.length > 0) throw errors;

      return anime;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error calling for anime on remote servers.',
        error
      );
    }
  }
}
