import type { Router } from "express";

import express from "express";

import { getProject, listProjects, listProjectTasks } from "./controller";

const projects: Router = express.Router();

projects.get("/", listProjects);
projects.get("/:id", getProject);
projects.get("/:id/tasks", listProjectTasks);

export default projects;
