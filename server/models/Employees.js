let mongoose = require('mongoose');
let Schema = mongoose.Schema();

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
		type: number,
		trim: true
	},
	FKDepartmentId: {
		type: number,
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
		type: number,
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
	}
});