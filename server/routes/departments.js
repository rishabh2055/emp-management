let express = require('express');
let router = express.Router();

let controller = require(APP_PATH+'/server/controllers/Departments');

router.post('/save_department', controller.addNewDepartment);

module.exports = router;