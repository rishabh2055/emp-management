const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DepartmentSchema = new Schema({
	departmentId: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	departmentName: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	departmentDesc: {
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

let Departments = mongoose.model('Departments', DepartmentSchema);
module.exports = Departments;