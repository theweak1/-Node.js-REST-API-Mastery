import "express";
import type { JwtPayload } from "jsonwebtoken";

declare global {
	namespace Express {
		interface Request {
			auth?: {
				payload: JwtPayload;
				token: string;
			};
		}
	}
}
