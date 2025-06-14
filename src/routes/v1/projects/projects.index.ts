import type { Router } from "express";

import express from "express";

import authenticateUser from "../../../middleware/authenticate-user";
import {
	getProject,
	listProjects,
	listProjectTasks,
} from "./projects.controller";

const projects: Router = express.Router();

projects.use(authenticateUser);
projects.get("/", listProjects);
projects.get("/:id", getProject);
projects.get("/:id/tasks", listProjectTasks);

export default projects;
