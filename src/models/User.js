const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
	{
	    name: {
			type: String,
			required: true
		},
		last_name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		image_url: {
			type: String
		}
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User
