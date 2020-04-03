import {
  IsDateString,
  IsNotEmpty,
  IsNotEmptyObject,
  IsArray,
  IsNumberString,
  IsUrl,
  IsNumber,
  IsEnum
} from 'class-validator';

/**
 * AnimeStatus
 * @description Describes the status of an Anime node.
 */
export enum AnimeStatus {
  UNRELEASED = 'unreleased',
  UPCOMING = 'upcoming',
  TBA = 'tba',
  CURRENT = 'current',
  FINISHED = 'finished'
}

/**
 * AnimeType
 * @description Describes the type of an Anime node.
 */
export enum AnimeType {
  ONA = 'ONA',
  OVA = 'OVA',
  TV = 'TV',
  MOVIE = 'movie',
  MUSIC = 'music',
  SPECIAL = 'special'
}

/**
 * AnimeImageDTO
 * @description Used for transfering links and meta of images from anime database.
 */
export class AnimeImageDTO {
  @IsUrl()
  tiny?: string;

  @IsUrl()
  small?: string;

  @IsUrl()
  medium?: string;

  @IsUrl()
  large?: string;

  @IsUrl()
  original?: string;

  meta: {
    dimensions: {
      tiny: { width: string; height: string };
      small: { width: string; height: string };
      medium: { width: string; height: string };
      large: { width: string; height: string };
    };
  };
}

/**
 * AnimeDTO
 * @description Used for transferring anime data to client.
 */
export class AnimeDTO {
  @IsNotEmpty()
  id: number;

  @IsDateString()
  createdAt: string;

  @IsDateString()
  updatedAt: string;

  @IsNotEmpty()
  slug: string;

  @IsNotEmpty()
  synopsis: string;

  @IsNotEmptyObject()
  titles: { [locale: string]: string };

  @IsNotEmpty()
  canonicalTitle: string;

  @IsArray()
  abbreviatedTitles: string[];

  @IsNumberString()
  @IsNotEmpty()
  averageRating: number;

  @IsNotEmpty()
  popularityRank: number;

  @IsNotEmpty()
  ratingRank: number;

  @IsNotEmptyObject()
  ratingFrequencies: { [key: string]: string };

  startDate?: string;

  endDate?: string;

  @IsNotEmpty()
  status: AnimeStatus;

  @IsNotEmptyObject()
  posterImage: AnimeImageDTO;

  @IsNotEmptyObject()
  coverImage: AnimeImageDTO;

  @IsNotEmpty()
  @IsNumber()
  episodeCount: number;

  @IsNotEmpty()
  @IsNumber()
  episodeLength: number;

  @IsEnum(AnimeType)
  @IsNotEmpty()
  showType: AnimeType;

  @IsEnum(AnimeType)
  subtype: AnimeType;

  @IsNotEmpty()
  nsfw: boolean;
}
