const express = require('express');
const router = express.Router();
const DepartmentController = require('../controllers/departmentController');

router.post('/', DepartmentController.createDepartment);
router.get('/:department_id', DepartmentController.getDepartmentById);
router.put('/:department_id', DepartmentController.updateDepartment);
router.delete('/:department_id', DepartmentController.deleteDepartment);
router.get('/', DepartmentController.getAllDepartments);

module.exports = router;
