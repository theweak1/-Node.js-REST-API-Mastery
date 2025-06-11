import type { Router } from "express";

import express from "express";

import authenticateUser from "../../../middleware/authenticate-user";
import { getTask, listTasks } from "./controller";

const tasks: Router = express.Router();

tasks.use(authenticateUser);
tasks.get("/", listTasks);
tasks.get("/:id", getTask);

export default tasks;
