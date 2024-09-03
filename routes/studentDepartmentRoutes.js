const express = require('express');
const router = express.Router();
const StudentDepartmentController = require('../controllers/studentDepartmentController');

router.post('/', StudentDepartmentController.createStudentDepartment);
router.get('/:student_department_id', StudentDepartmentController.getStudentDepartmentById);
router.put('/:student_department_id', StudentDepartmentController.updateStudentDepartment);
router.delete('/:student_department_id', StudentDepartmentController.deleteStudentDepartment);
router.get('/', StudentDepartmentController.getAllStudentDepartments);

module.exports = router;
