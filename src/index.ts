import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

import { logger } from "./utils/logger";

dotenv.config();

const app: Application = express();

if (!process.env.APP_PORT) {
  process.exit(1);
}

const PORT = process.env.APP_PORT!;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
