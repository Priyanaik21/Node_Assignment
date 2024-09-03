const express = require('express');
const router = express.Router();
const InstructorCourseController = require('../controllers/instructorCourseController');

router.post('/', InstructorCourseController.createInstructorCourse);
router.get('/:instructor_course_id', InstructorCourseController.getInstructorCourseById);
router.put('/:instructor_course_id', InstructorCourseController.updateInstructorCourse);
router.delete('/:instructor_course_id', InstructorCourseController.deleteInstructorCourse);
router.get('/', InstructorCourseController.getAllInstructorCourses);

module.exports = router;
