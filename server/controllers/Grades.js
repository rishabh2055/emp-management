let GradeModel = require('../models/Grades');

class Grades{
	getGradeId(req, res){
		GradeModel.find().sort({'createdOn': -1}).exec((err, docs) => {
			if(err){
				res.status(400).json({message: err});
			}else{
				let gradeId = '';
				if(docs.length === 0){
					gradeId = 'GRADE01';
				}else{
					let tempId = docs[0].gradeId.substr(5);
					let tempNewId = parseInt(parseInt(tempId) +1);
					gradeId = (tempNewId) < 10? `GRADE0${tempNewId}`: `GRADE${tempNewId}`;
				}
				res.status(200).json({gradeId: gradeId});
			}
		});
	};

	addNewGrade(req, res){console.log(req.body);
		let grade = new GradeModel({
			gradeId: req.body.gradeId,
			gradeName: req.body.gradeName,
			gradeStartSalary: req.body.startSalary,
			gradeEndSalary: req.body.endSalary,
			gradeDescription: req.body.gradeDesc,
			createdOn: new Date()
		});
		grade.save(err => {
			if(err){
				res.status(400).json({message: err});
			}else{
				res.status(200).json({message: "Grade details added successfully"});
			}
		})
	};

	updateGrade(req, res){
		let grade = {
			gradeStartSalary: req.body.startSalary,
			gradeEndSalary: req.body.endSalary,
			gradeDescription: req.body.gradeDesc,
			updatedOn: new Date()
		};
		GradeModel.update({_id: req.body._id}, grade, (err, numAffected) => {
			if(err){
				res.status(400).json({message: err});
			}else{
				res.status(200).json({message: "Grade details updated successfully"});
			}
		})
	};

	deleteGrade(req, res){
		let grade = {
			_id: req.body._id
		};
		GradeModel.remove(grade, (err, numAffected) => {
			if(err){
				res.status(400).json({message: err});
			}else{
				res.status(200).json({message: "Grade details deleted successfully"});
			}
		})
	};

	getAllGrades(req, res){
		GradeModel.find().sort({"createdOn":-1}).exec((err, docs) => {
			if(err){
				res.status(400).json({message: err});
			}else{
				res.status(200).json({grades: docs});
			}
		});
	}
}

module.exports = new Grades();