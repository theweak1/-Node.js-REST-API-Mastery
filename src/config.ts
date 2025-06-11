const config = {
	env: process.env.NODE_ENV || "development",
	port: Number.parseInt(process.env.PORT || "3000"),
	debug: process.env.APP_DEBUG === "true",
	appSecret: process.env.APP_SECRET || "",
};

export default config;
