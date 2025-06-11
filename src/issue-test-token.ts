import jwt from "jsonwebtoken";

import config from "./config";

const payload = {
	sub: "e83d153d-7724-4333-8088-51ec70743909",
};

const token = jwt.sign(payload, config.appSecret, {
	expiresIn: "1h",
	issuer: "task-manager-app",
});

console.info(token);
