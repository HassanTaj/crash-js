import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { BaseRouter } from './routes/index.route.js';
import { AppMiddleware } from './middleware/index.middleware.js';

const app = express();

// config options

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// middleware
AppMiddleware.Init(app);


// end point configuration
const port = 5001;
app.listen(port, () => {
	console.log(`Server 🚀 on port: ${port}`);
});

app.use('/api', BaseRouter.InitRoutes());
