const express = require('express');
const router = express.Router();
const CourseDepartmentController = require('../controllers/courseDepartmentController');

router.post('/', CourseDepartmentController.createCourseDepartment);
router.get('/:course_department_id', CourseDepartmentController.getCourseDepartmentById);
router.put('/:course_department_id', CourseDepartmentController.updateCourseDepartment);
router.delete('/:course_department_id', CourseDepartmentController.deleteCourseDepartment);
router.get('/', CourseDepartmentController.getAllCourseDepartments);

module.exports = router;
