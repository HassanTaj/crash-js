import { Router } from "express";
import { ContactRoutes } from "./contacts.route.js";

export class BaseRouter {
	static InitRoutes() {
		const router = new Router();
		// configure app routes here
		router.use('/contacts', ContactRoutes.Init());

		return router;
	}
};