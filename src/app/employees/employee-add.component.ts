import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

import {CommonService} from '../common.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
	templateUrl: './employee-add.component.html',
	styleUrls: ['./employees.component.css']
})
export class EmployeeAddComponent implements OnInit{
	employeeFormGroup: FormGroup;
	submitted: boolean = false;
	successMsg: String = '';
	errMsg: String = '';
	activeTabs: String = 'personal';
	empQualifications: FormArray;
	empSkills: FormArray;
	empProjects: FormArray;
	validRange: boolean = true;
	constructor(
		private formBuilder: FormBuilder,  
		private commonService: CommonService,
		private spinnerService: Ng4LoadingSpinnerService){
		
	}
	ngOnInit(){
		this.employeeFormGroup = this.formBuilder.group({
			empId: [{value: '', disabled: true}],
			empName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
			empDesignation: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
			empEmail: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]],
			empDepartment: ['', Validators.required],
			empGender: ['', Validators.required],
			empJoiningDate: ['', Validators.required],
			empPhoneNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern(/^[0-9+ ]*$/)]],
			empSalary: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[0-9.,]*$/)]],
			empBloodGroup: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5), Validators.pattern(/^[A-Z+ ]*$/)]],
			empGrade: ['', Validators.required],
			empAddress: ['', [Validators.minLength(3), Validators.maxLength(500)]],
			empQualifications: this.formBuilder.array([this.qualificationFromGroupFunc()]),
			empSkills: this.formBuilder.array([this.skillsFromGroupFunc()]),
			empProjects: this.formBuilder.array([this.projectsFromGroupFunc()]),
			empImage: this.formBuilder.group({
				imageFile: ['', Validators.required]
			})

		});
	}

	/* Function used to initialize employee qualification form controls */
	qualificationFromGroupFunc(): FormGroup{
		return this.formBuilder.group({
		    qualification: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			university: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			yearOfPassing: new FormControl('', Validators.required),
			percentage: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(/^[0-9]*$/)])
		  });  
	}
	/* Function used to initialize employee skills form controls */
	skillsFromGroupFunc(): FormGroup{
		return this.formBuilder.group({
			skill: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			totalExperience: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(/^[0-9]*$/)]),
			competencyLevel: new FormControl('', Validators.required)
		});
	}
	/* Function used to initialize employee projects form controls */
	projectsFromGroupFunc(): FormGroup{
		return this.formBuilder.group({
			project: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			joinedAt: new FormControl('', Validators.required),
			leftAt: new FormControl('', Validators.required)
		});
	}

	/* Defining getter for employee qualification form controls */
	get empQualControls() {
		return this.employeeFormGroup.get('empQualifications');
	};

	/* Function used to push more qualification columns */
	addMoreQualification(): void{
		this.empQualifications = <FormArray>this.empQualControls['controls'];
		this.empQualifications.push(this.qualificationFromGroupFunc());
	}

	/* Function used to remove a qualification column */
	removeQualificationIndex(index: number): void{
		let qualificationControls = <FormArray>this.empQualControls;
		qualificationControls.removeAt(index);
	}

	/* Function used to check qualification forms validation */
	isQualificationFormValid(): boolean{debugger
		let isValid = true;
		this.empQualifications = <FormArray>this.empQualControls['controls'];
		/*this.empQualifications.forEach(value => {
			if(!value.valid){
				isValid = false;
			}
		})*/
		return isValid;
	}
	/* Defining getter for employee skills form controls */
	get empSkillsControls() {
		return this.employeeFormGroup.get('empSkills');
	};

	/* Function used to push more skill columns */
	addMoreSkill(): void{
		this.empSkills = <FormArray>this.empSkillsControls['controls'];
		this.empSkills.push(this.skillsFromGroupFunc());
	}

	/* Function used to remove a skill column */
	removeSkillIndex(index: number): void{
		let skillControls = <FormArray>this.empSkillsControls;
		skillControls.removeAt(index);
	}

	/* Function used to check skill forms validation */
	isSkillFormValid(): boolean{
		let isValid = true;
		this.empSkills = <FormArray>this.empQualControls['controls'];
		/*this.empSkills.forEach(value => {
			if(!value.valid){
				isValid = false;
			}
		})*/
		return isValid;
	}
	/* Defining getter for employee projects form controls */
	get empProjectsControls() {
		return this.employeeFormGroup.get('empProjects');
	};

	/* Function used to push more project columns */
	addMoreProject(obj): void{
		if(this.validateDateValues(obj)){
			this.empProjects = <FormArray>this.empProjectsControls['controls'];
			this.empProjects.push(this.projectsFromGroupFunc());
		}
	}

	/* Function used to remove a project column */
	removeProjectIndex(index: number): void{
		let projectControls = <FormArray>this.empProjectsControls;
		projectControls.removeAt(index);
	}

	/* Function used to check project forms validation */
	isProjectFormValid(): boolean{
		let isValid = true;
		this.empProjects = <FormArray>this.empProjectsControls['controls'];
		/*this.empProjects.forEach(value => {
			if(!value.valid){
				isValid = false;
			}
		})*/
		return isValid;
	}

	/* Function used to validate joined date and left date & returns error if left date is less than joined date */
	validateDateValues(obj): boolean{
		//let joinedMonth = (obj.joinedAt.value.month < 10)? '0'+obj.joinedAt.value.month: obj.joinedAt.value.month;
		let joinedDate = `${obj.joinedAt.value.year}-${obj.joinedAt.value.month}-${obj.joinedAt.value.day}`;
		//let leftMonth = (obj.leftAt.value.month < 10)? '0'+obj.leftAt.value.month: obj.leftAt.value.month;
		let leftDate = `${obj.leftAt.value.year}-${obj.leftAt.value.month}-${obj.leftAt.value.day}`;
		let date1 = new Date(joinedDate)
		let date2 = new Date(leftDate)
		if(date1 > date2){
			this.validRange = false;
		}
		return this.validRange;
	}

	changeCurrentTab(tab){
		this.activeTabs = tab;
	}
}