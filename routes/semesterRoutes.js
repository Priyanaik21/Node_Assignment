const express = require('express');
const router = express.Router();
const SemesterController = require('../controllers/semesterController');

router.post('/', SemesterController.createSemester);
router.get('/semesters/:semester_id', SemesterController.getSemesterById);
router.put('/semesters/:semester_id', SemesterController.updateSemester);
router.delete('/semesters/:semester_id', SemesterController.deleteSemester);
router.get('/semesters', SemesterController.getAllSemesters);

module.exports = router;
