let UserModel = require('../models/Users');

let passport = require('passport');

class Users{
	login(req, res, next){
		const user = req.body;
		if(!user.email){
			return res.status(422).json({
				message: 'Email address is required'
			})
		}
		if(!user.password){
			return res.status(422).json({
				message: 'Password is required'
			})
		}

		return passport.authenticate('local', {session: false}, (err, user, info) => {
			console.log(err, user, info)
			if(err){
				return next(err);
			}
			if(user){
				user.token = user.generateJWT();
				return res.json({user: user.toAuthJSON()});
			}
			return status(400).info;
		})(req, res, next);
	}
}

module.exports = new Users();