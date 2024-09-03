const express = require('express');
const router = express.Router();
const StudentInstructorController = require('../controllers/studentInstructorController');


router.post('/', StudentInstructorController.createStudentInstructor);
router.get('/:student_instructor_id', StudentInstructorController.getStudentInstructorById);
router.put('/:student_instructor_id', StudentInstructorController.updateStudentInstructor);
router.delete('/:student_instructor_id', StudentInstructorController.deleteStudentInstructor);
router.get('/', StudentInstructorController.getAllStudentInstructors);

module.exports = router;
