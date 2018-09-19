let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EmpExpSchema = new Schema({
	FKEmployeeId: {
		type: Number,
		required: true,
		trim: true
	},
	companyName: {
		type: String,
		trim: true
	},
	joinedAt: {
		type: String,
		trim: true
	},
	leftAt: {
		type: String,
		trim: true
	},
	designation: {
		type: String,
		trim: true
	},
	createdOn: {
		type: Date
	},
	updatedOn: {
		type: Date
	}
});

let EmpExperiences = mongoose.model('EmployeeExperiences', EmpExpSchema);
module.exports = EmpExperiences;