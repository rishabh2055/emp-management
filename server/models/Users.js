const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
	userName: {
		type: String,
		required: true,
		trim: true
	},
	userEmail: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	userMobile: {
		type: Number,
		unique: true,
		required: true,
		trim: true
	},
	userPassword: {
		type: String,
		required: true,
		trim: true
	},
	salt: {
		type: String,
		required: true,
		trim: true
	},
	userRole: {
		type: String,
		enum: ['Admin', 'User', 'Employee']
	},
	lastLoggedIn: {
		type: Date
	},
	createdOn: {
		type: Date
	},
	updatedOn: {
		type: Date
	}

});

UserSchema.methods.setPassword = function(password){
	this.salt = crypto.randomBytes(16).toString('hex');
	this.userPassword = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validatePassword = function(password){
	const hashedPassword = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
	return this.userPassword === hashedPassword;
};

UserSchema.methods.generateJWT = function(){
	const today = new Date();
	const expirationDate = new Date(today);
	expirationDate.setDaTime(today.getTime() + 3600);
	return jwt.sign({
		userEmail: this.userEmail,
		id: this._id,
		exp: parseInt(expirationDate.getTime() / 1000, 10)
	}, 'secret');
};

UserSchema.methods.toAuthJSON = function(){
	return {
	    _id: this._id,
	    userEmail: this.userEmail,
	    token: this.generateJWT(),
	  };
};

let Users = mongoose.model('Users', UserSchema);
module.exports = Users;