import type { Request, Response } from "express";

import EntityNotFoundError from "../../../errors/entity-not-found";
import prisma from "../../../prisma-client";

export async function listProjects(req: Request, res: Response) {
	const projects = await prisma.project.findMany();
	res.status(200).json([projects]);
}

export async function getProject(req: Request, res: Response) {
	const project = await prisma.project.findUnique({
		where: {
			id: req.params.id,
		},
	});

	if (!project) {
		throw new EntityNotFoundError({
			message: "Project not found",
			statusCode: 404,
			code: "ERR_NF",
		});
	}
	res.status(200).json({ project });
}

export async function listProjectTasks(req: Request, res: Response) {
	const tasks = await prisma.task.findMany({
		where: {
			project_id: req.params.id,
		},
	});
	res.status(200).json({ tasks });
}
