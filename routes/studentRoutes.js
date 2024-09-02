const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');

router.route('/').post(StudentController.createStudent);
router.get('/student/:student_id', StudentController.getStudentById);
router.put('/student/:student_id', StudentController.updateStudent);
router.delete('/student/:student_id', StudentController.deleteStudent);
router.get('/', StudentController.getAllStudents);

module.exports = router;
