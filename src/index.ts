import "reflect-metadata";
import express, { Express } from "express";
import { AppDataSource } from "./db/data-source";
import cors from "cors";

require("dotenv").config();

const PORT = process.env.PORT || 8071;

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log("AppDataSource initialized");
  } catch (err) {
    console.log(err);
  }
  const app: Express = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  try {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
      console.log("Happy Hacking");
    });
  } catch (err) {
    console.error("Error while attempting to listen", err);
  }
};

main();
