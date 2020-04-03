// import { DatabaseType } from 'typeorm';

export const environment = {
  production: false,
  database: {
    database: 'anigoose_db.sqlite',
    host: '',
    port: 3000,
    username: '',
    password: '',
    synchronize: true
  },
  authentication: {
    secret: 'anigoose_dev32',
    expiry: '12d'
  }
};
