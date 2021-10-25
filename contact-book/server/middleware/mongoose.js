import mongoose from 'mongoose';

export class MongoConfig {
	static Init() {
		mongoose.connect('mongodb://localhost:27017/contacts-test-api2', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then(() => {
			console.log('connected to db 🔥');
		}).catch(error => {
			console.log(`couldn't connect  to  db ${error}`);
		});

		return mongoose;
	}
}