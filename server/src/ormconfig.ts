import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";

dotenv.config();
let HOST: string = "postgres";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.NODE_ENV !== 'dev' ? "postgres" : "localhost",
  port: 5432,
  username: process.env.OLD_SLOVAK_USERNAME,
  password: process.env.OLD_SLOVAK_PASSWORD,
  database: process.env.OLD_SLOVAK_DATABASE,
  connectTimeoutMS: 5000,
  entities: [__dirname + "/entity/*.ts"],
  migrations: ["migration/*.ts"],
  synchronize:
    process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "test",
  cli: {
    migrationsDir: "migration",
    entitiesDir: "src/entity",
  },
};

export default config;
