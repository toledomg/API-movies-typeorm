import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'path';
import 'dotenv/config';

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, 'entities/**.{js,ts}');
  const migrationsPath = path.join(__dirname, 'migrations/**.{js,ts}');

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === 'test') {
    return {
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error('DATABASE_URL does not defined in .env');

  return {
    type: 'postgres',
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
