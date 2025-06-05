import type { Router } from "express";

import express from "express";

import { getTask, listTasks } from "./controller";

const tasks: Router = express.Router();

tasks.get("/", listTasks);
tasks.get("/:id", getTask);

export default tasks;
