const express = require('express');
const router = express.Router();
const StudentCourseController = require('../controllers/studentCourseController');

router.post('/', StudentCourseController.createStudentCourse);
router.get('/:student_course_id', StudentCourseController.getStudentCourseById);
router.put('/:student_course_id', StudentCourseController.updateStudentCourse);
router.delete('/:student_course_id', StudentCourseController.deleteStudentCourse);
router.get('/', StudentCourseController.getAllStudentCourses);

module.exports = router;
