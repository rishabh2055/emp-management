let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EmpSchema = new Schema({
	empId: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	empName: {
		type: String,
		required: true,
		trim: true
	},
	empDesignation: {
		type: String,
		required: true,
		trim: true
	},
	empJoiningDate: {
		type: Date,
		required: true,
		trim: true
	},
	empExperience: {
		type: Number,
		trim: true
	},
	FKDepartmentId: {
		type: Number,
		required: true,
		trim: true
	},
	empEmail: {
		type: String,
		required: true,
		trim: true
	},
	empContactNo: {
		type: String,
		required: true,
		trim: true
	},
	FKGradeId: {
		type: Number,
		required: true,
		trim: true
	},
	empSalary: {
		type: String,
		required: true,
		trim: true
	},
	empGender: {
		type: String,
		enum: ["Male", "Female"]
	},
	empBloodGroup: {
		type: String,
		trim: true
	},
	empAddress: {
		type: String,
		trim: true
	},
	empImage: {
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

let Employees = mongoose.model('Employees', EmpSchema);
module.exports = Employees;