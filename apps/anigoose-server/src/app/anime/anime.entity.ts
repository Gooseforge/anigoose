import { Entity, Column, PrimaryColumn } from 'typeorm';
import { AnimeType, AnimeStatus } from '@anigoose/core';

@Entity()
export class AnimeEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @Column()
  slug: string;

  @Column({ type: 'text' })
  synopsis: string;

  @Column()
  title: string;

  @Column()
  averageRating: number;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column()
  popularityRank: number;

  @Column()
  ratingRank: number;

  @Column()
  ageRating: string;

  @Column({ type: 'varchar' })
  showType: AnimeType;

  @Column({ type: 'varchar' })
  subtype: AnimeType;

  @Column({ type: 'varchar' })
  status: AnimeStatus;

  @Column()
  episodeCount: number;

  @Column()
  episodeLength: number;

  @Column()
  totalLength: number;

  @Column()
  nsfw: boolean;
}
