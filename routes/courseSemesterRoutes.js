const express = require('express');
const router = express.Router();
const CourseSemesterController = require('../controllers/courseSemesterController');

router.post('/', CourseSemesterController.createCourseSemester);
router.get('/:course_semester_id', CourseSemesterController.getCourseSemesterById);
router.put('/:course_semester_id', CourseSemesterController.updateCourseSemester);
router.delete('/:course_semester_id', CourseSemesterController.deleteCourseSemester);
router.get('/', CourseSemesterController.getAllCourseSemesters);

module.exports = router;
