let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EmpQualSchema = new Schema({
	FKEmployeeId: {
		type: Number,
		required: true,
		trim: true
	},
	qualification: {
		type: String,
		trim: true
	},
	university: {
		type: String,
		trim: true
	},
	yearOfPassing: {
		type: String,
		trim: true
	},
	percentage: {
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

let EmployeeQualifications = mongoose.model('EmployeeQualifications', EmpQualSchema);
module.exports = EmployeeQualifications;