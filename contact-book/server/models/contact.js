import mongoose from "mongoose";

export class Contact {
	static schema = new mongoose.Schema({
		FirstName: { type: String },
		LastName: { type: String },
		Address: { type: String },
		City: { type: String },
		Country: { type: String },
		PostalCode: { type: String },
		About: { type: String },
		ImagePath: { type: String }
	});

	static get Collection() {
		return mongoose.model(`contact`, this.schema, `contacts`);
	}
}