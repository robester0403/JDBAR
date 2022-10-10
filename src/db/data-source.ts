import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "JDBAR-DB",
  entities: [],
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});
