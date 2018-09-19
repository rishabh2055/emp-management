let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EmpSkillsSchema = new Schema({
	FKEmployeeId: {
		type: Number,
		required: true,
		trim: true
	},
	skill: {
		type: String,
		trim: true
	},
	yearOfExperience: {
		type: String,
		trim: true
	},
	competencyLevel: {
		type: String,
		enum: ["Begineer", "Intermediate", "Expert"]
	},
	createdOn: {
		type: Date
	},
	updatedOn: {
		type: Date
	}
});

let EmployeeSkills = mongoose.model('EmployeeSkills', EmpSkillsSchema);
module.exports = EmployeeSkills;