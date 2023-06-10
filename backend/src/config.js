import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  API_KEY: process.env.API_KEY,
  // DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
  // DATABASE_PORT: process.env.DATABASE_PORT || 3000,
  // DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  // DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  // DATABASE_NAME: process.env.DATABASE_NAME,
  // TOKEN_SECRET: process.env.TOKEN_SECRET,
};
