let express = require('express');
let router = express.Router();

let controller = require(APP_PATH+'/server/controllers/Grades');

router.get('/get_grade_id', controller.getGradeId);
router.post('/new_grade', controller.addNewGrade);
router.put('/update_grade', controller.updateGrade);
router.post('/delete_grade', controller.deleteGrade);
router.get('/list_grades', controller.getAllGrades);

module.exports = router;