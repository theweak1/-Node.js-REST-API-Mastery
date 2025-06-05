import type { Router } from "express";

import express from "express";

import projects from "./projects";
import tasks from "./tasks";

const v1: Router = express.Router();

v1.use("/tasks", tasks);
v1.use("/projects", projects);

export default v1;
