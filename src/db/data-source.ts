import { DataSource } from "typeorm";

//
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PORT ? String(process.env.DB_PORT) : "123456",
  database: process.env.DB_DBNAME || "JDBAR-DB",
  entities: [],
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});
