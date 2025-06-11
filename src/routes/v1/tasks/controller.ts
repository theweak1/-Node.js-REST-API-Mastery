import type { Request, Response } from "express";

import EntityNotFoundError from "../../../errors/entity-not-found";
import prisma from "../../../prisma-client";

export async function listTasks(req: Request, res: Response) {
	const tasks = await prisma.task.findMany({
		where: {
			user_id: req.auth?.payload.sub,
		},
	});
	res.status(200).json({ tasks });
}

export async function getTask(req: Request, res: Response) {
	const task = await prisma.task.findUnique({
		where: {
			id: req.params.id,
			user_id: req.auth?.payload.sub,
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
