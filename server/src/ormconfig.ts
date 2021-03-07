import { ConnectionOptions } from "typeorm";

let HOST: string;

if (process.env.NODE_ENV === "dev") {
  HOST = "localhost";
} else {
  HOST = "postgres";
}

const config: ConnectionOptions = {
  type: "postgres",
  host: HOST,
  port: 5432,
  username: process.env.OLD_SLOVAK_USERNAME,
  password: process.env.OLD_SLOVAK_PASSWORD,
  database: process.env.OLD_SLOVAK_DATABASE,
  connectTimeoutMS: 5000,
  entities: ["entity/*.ts"],
  migrations: ["migration/*.ts"],
  synchronize: process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "test",
  cli: {
    migrationsDir: "migration",
  },
};

export default config;
