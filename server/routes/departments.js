let express = require('express');
let router = express.Router();

let controller = require(APP_PATH+'/server/controllers/Departments');

router.get('/get_dept_id', controller.getDepartmentID);
router.post('/new_dept', controller.addNewDepartment);
router.post('/list_dept', controller.getAllDepartments);

module.exports = router;