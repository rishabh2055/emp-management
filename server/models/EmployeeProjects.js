let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EmpProjectsSchema = new Schema({
	FKEmployeeId: {
		type: Number,
		required: true,
		trim: true
	},
	FKProjectId: {
		type: Number,
		trim: true
	},
	joinedAt: {
		type: Date
	},
	leftAt: {
		type: Date
	},
	createdOn: {
		type: Date
	},
	updatedOn: {
		type: Date
	}
});

let EmployeeProjects = mongoose.model('EmployeeProjects', EmpProjectsSchema);
module.exports = EmployeeProjects;