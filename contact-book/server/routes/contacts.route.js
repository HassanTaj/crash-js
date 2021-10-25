import { Router } from "express";
import { ContactController } from "../controllers/contact.controller.js";


export class ContactRoutes {
	static Init() {
		const router = new Router();
		router.get('/', ContactController.get);
		router.get('/:id', ContactController.getSingle);
		router.post('/', ContactController.post);
		router.put('/:id', ContactController.put);
		router.delete('/:id', ContactController.delete);
		return router;
	}
}