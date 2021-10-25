import mongoose from "mongoose";
import { Contact } from "../models/contact.js"
const { Types } = mongoose;
const { ObjectId } = Types

export class ContactController {
	static get(req, res, next) {
		Contact.Collection.find((err, doc) => {
			res.send((err) ? 'something went wrong' : doc);
		});
	}
	static getSingle(req, res, next) {
		let id = req.params.id;
		if (ObjectId.isValid(id)) {
			Contact.Collection.findById(id, (err, doc) => {
				if (err) {
					console.log('error dude error');
				} else {
					res.send(doc);
				}
			})
		} else {
			return res.status(400).send();
		}

	}
	static post(req, res, next) {
		// let model = JSON.parse(req.body.model)
		
		let contact = new Contact.Collection(req.body.model);

		contact.save((err, doc) => {
			if (err) {
				console.log(err);
			} else {
				res.send(doc);
			}
		});
	}
	static put(req, res, next) {
		let id = req.params.id;
		if (ObjectId.isValid(id)) {
			let contact = {
				FirstName: req.body.FirstName,
				LastName: req.body.LastName,
				Address: req.body.Address,
				City: req.body.City,
				Country: req.body.Country,
				PostalCode: req.body.PostalCode,
				About: req.body.About,
			};

			Contact.Collection.findByIdAndUpdate(id, { $set: contact }, { new: true }, (err, doc) => {
				if (err) {
					console.log('error dude error');
				} else {
					res.send(doc);
				}
			})
		} else {
			return res.status(400).send();
		}

	}
	static delete(req, res, next) {
		let id = req.params.id;
		if (ObjectId.isValid(id)) {
			Contact.Collection.findByIdAndRemove(id, (err, doc) => {
				if (err) {
					console.log('error dude error');
				} else {
					res.send(doc);
				}
			})
		} else {
			return res.status(400).send();
		}

	}
}