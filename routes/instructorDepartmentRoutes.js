const express = require('express');
const router = express.Router();
const InstructorDepartmentController = require('../controllers/instructorDepartmentController');

router.post('/', InstructorDepartmentController.createInstructorDepartment);
router.get('/:instructor_department_id', InstructorDepartmentController.getInstructorDepartmentById);
router.put('/:instructor_department_id', InstructorDepartmentController.updateInstructorDepartment);
router.delete('/:instructor_department_id', InstructorDepartmentController.deleteInstructorDepartment);
router.get('/', InstructorDepartmentController.getAllInstructorDepartments);

module.exports = router;
