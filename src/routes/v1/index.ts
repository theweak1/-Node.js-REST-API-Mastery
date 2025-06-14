import type { Router } from "express";

import express from "express";

import projects from "./projects/projects.index";
import tasks from "./tasks/tasks.index";

const v1: Router = express.Router();

v1.use("/tasks", tasks);
v1.use("/projects", projects);

export default v1;
