const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
	googleId: { type: String },
	_id: mongoose.Schema.Types.ObjectId,
	name: { type: String, required: true },
	token: { type: String },
	email: {
		type: String,
		required: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
	},
	password: { type: String },

	profileImage: {
		type: String,
	},
	regNo: { type: String },
	isVerified: { type: Boolean, default: false },
	passResetKey: String,
	passKeyExpires: Number,
	verifySignup: String,
	verifyKeyExpires: Number,
	avatar: {
		type: String,
	},
});

module.exports = mongoose.model("User", userSchema);