const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GradesSchema = new Schema({
	gradeId:{
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	gradeName:{
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	gradeStartSalary:{
		type: String,
		required: true,
		trim: true
	},
	gradeEndSalary:{
		type: String,
		required: true,
		trim: true
	},
	gradeDescription:{
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

let Grades = mongoose.model('Grades', GradesSchema);

module.exports = Grades;