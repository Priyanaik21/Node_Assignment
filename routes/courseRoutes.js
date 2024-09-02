const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseController');

router.post('/', CourseController.createCourse);
router.get('/:course_id', CourseController.getCourseById);
router.put('/:course_id', CourseController.updateCourse);
router.delete('/:course_id', CourseController.deleteCourse);
router.get('/', CourseController.getAllCourses);

module.exports = router;
