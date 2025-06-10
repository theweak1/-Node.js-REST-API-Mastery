import type { NextFunction, Request, Response } from "express";

import EntityNotFoundError from "../../../errors/entity-not-found";
import prisma from "../../../prisma-client";

export async function listTasks(req: Request, res: Response) {
	const tasks = await prisma.task.findMany();
	res.status(200).json({ tasks });
}

export async function getTask(req: Request, res: Response, next: NextFunction) {
	const task = await prisma.task.findUnique({
		where: {
			id: req.params.id,
		},
	});
	if (!task) {
		throw new EntityNotFoundError({
			message: "Entity not found",
			statusCode: 404,
			code: "ERR_NF",
		});
	}

	res.status(200).json({ task });
}
