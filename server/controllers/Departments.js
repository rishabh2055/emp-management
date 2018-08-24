let DeptModel = require('../models/Departments');

class Departments{
	addNewDepartment(req, res){
		let department = new DeptModel({
			departmentId: req.body.departmentID,
			departmentName: req.body.departmentName,
			departmentDesc: req.body.departmentDesc,
			createdOn: new Date()
		});
		department.save(err => {
			if(err){
				res.status(400).json({message: err});
			}else{
				res.status(200).json({message: "Department details added successfully"});
			}
		})
	}
	updateDepartment(req, res){
		let department = {
			departmentId: req.body.departmentId,
			departmentName: req.body.departmentName,
			departmentDesc: req.body.departmentDesc,
			updatedOn: new Date()
		};
		DeptModel.update({_id: req.body._id}, department, (err, numAffected) => {
			if(err){
				res.status(400).json({message: err});
			}else{console.log('numAffected', numAffected)
				res.status(200).json({message: "Department details updated successfully"});
			}
		})
	}
	getDepartmentID(req, res){
		DeptModel.find().sort({"createdOn":-1}).exec((err, docs) => {
			if(err){
				res.status(400).json({message: err});
			}else{
				let departmentId;
				if(docs.length === 0){
					departmentId = 'DEPPT01';
				}else{
					let tempId = docs[0].departmentId.substr(5);
					let tempNewId = parseInt(parseInt(tempId) + 1);
					departmentId = (tempNewId) < 10 ? `DEPPT0${tempNewId}`: `DEPPT${tempNewId}`;
				}
				res.status(200).json({departmentId: departmentId});
			}
		});
	}
	getAllDepartments(req, res){
		DeptModel.find().sort({"createdOn":-1}).exec((err, docs) => {
			if(err){
				res.status(400).json({message: err});
			}else{
				res.status(200).json({departments: docs});
			}
		});
	}
}

module.exports = new Departments();