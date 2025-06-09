import type { NextFunction, Request, Response } from "express";

import EntityNotFoundError from "../../../errors/entity-not-found";

export function listTasks(req: Request, res: Response) {
	res.status(200).json([]);
}

export async function getTask(req: Request, res: Response, next: NextFunction) {
	throw new EntityNotFoundError({
		message: "Entity not found",
		statusCode: 404,
		code: "ERR_NF",
	});
	res.status(200).json({ id: 1, name: "Task 1" });
}
