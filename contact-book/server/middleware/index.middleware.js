import { MongoConfig } from "./mongoose.js";


export class AppMiddleware {
	static Init(app) {
		MongoConfig.Init();
	}
}