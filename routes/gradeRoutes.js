const express = require('express');
const router = express.Router();
const GradeController = require('../controllers/gradeController');

router.post('/', GradeController.createGrade);
router.get('/:grade_id', GradeController.getGradeById);
router.put('/:grade_id', GradeController.updateGrade);
router.delete('/:grade_id', GradeController.deleteGrade);
router.get('/', GradeController.getAllGrades);

module.exports = router;
