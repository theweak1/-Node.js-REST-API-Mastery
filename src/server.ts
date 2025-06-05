import type { Request, Response } from "express";

import cors from "cors";
import express from "express";
import morgan from "morgan";

import config from "./config";

export function createServer() {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  app.get("/health", (req: Request, res: Response) => {
    res.json({ ok: true, environment: config.env });
  });

  return app;
}
