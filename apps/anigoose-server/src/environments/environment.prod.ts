import { DatabaseType } from 'typeorm';

export const environment = {
  production: true,
  database: {
    type: 'postgres' as DatabaseType,
    name: 'anigoose_db',
    host: 'anime.gooseforge.com',
    port: 3313,
    username: 'dbUser',
    password: 'dbPassword',
    synchronize: true
  },
  authentication: {
    secret: 'ProDuction_Secret',
    expiry: '6h'
  }
};
