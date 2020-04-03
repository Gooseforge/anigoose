import {
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AnimeModule } from './anime/anime.module';
import { environment } from '../environments/environment';
import { getMetadataArgsStorage } from 'typeorm';

const { database: databaseOptions } = environment;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseOptions,
      entities: getMetadataArgsStorage().tables.map(t => t.target),
      dropSchema: !environment.production
    }),
    AuthModule,
    UserModule,
    AnimeModule
  ],
  controllers: [],
  providers: []
})
export class AppModule
  implements OnApplicationBootstrap, OnApplicationShutdown {
  async onApplicationBootstrap() {
    console.log('anigoose-api: Application Started');
  }

  async onApplicationShutdown() {
    console.log('anigoose-api: Application Shutdown');
  }
}
