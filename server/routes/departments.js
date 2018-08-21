let express = require('express');
let router = express.Router();

let controller = require('./controllers/Departments');

router.post('/save_department', controller.addNewDepartment);