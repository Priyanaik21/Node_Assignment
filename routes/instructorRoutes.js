const express = require('express');
const router = express.Router();
const InstructorController = require('../controllers/instructorController');

router.post('/', InstructorController.createInstructor);
router.get('/instructors/:instructor_id', InstructorController.getInstructorById);
router.put('/instructors/:instructor_id', InstructorController.updateInstructor);
router.delete('/instructors/:instructor_id', InstructorController.deleteInstructor);
router.get('/instructors', InstructorController.getAllInstructors);

module.exports = router;
