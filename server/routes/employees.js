let express = require('express');
let router = express.Router();

let controller = require('../controllers/Employees');

router.get('/get_emp_id', controller.getEmployeeId);
router.post('/new_emp', controller.newEmployee);
router.put('/update_emp', controller.updateEmployee);
router.post('/delete_emp', controller.deleteEmployee);
router.get('/list_emp', controller.getAllEmployees);

module.exports = router;