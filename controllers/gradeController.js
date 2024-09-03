const GradeService = require('../services/gradeService');

const {
  CREATE_ENTITY_ERROR,
  ENTITY_NOT_FOUND,
  UPDATE_ENTITY_ERROR,
  DELETE_ENTITY_ERROR,
  GET_ENTITY_ERROR,
} = require("../utils/errorMessage.js");

const {
  BAD_REQUEST,
  CREATED,
  OK,
  NOT_FOUND,
}= require("../utils/statusCode.js");

class GradeController {
  async createGrade(req, res) {
    try {
      const grade = await GradeService.createGrade(req.body);
      res.status(CREATED).json(grade);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getGradeById(req, res) {
    try {
      const grade = await GradeService.getGradeById(req.params.grade_id);
      res.status(OK).json(grade);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateGrade(req, res) {
    try {
      const grade = await GradeService.updateGrade(req.params.grade_id, req.body);
      res.status(OK).json(grade);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteGrade(req, res) {
    try {
      const result = await GradeService.deleteGrade(req.params.grade_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllGrades(req, res) {
    try {
      const grades = await GradeService.getAllGrades();
      res.status(OK).json(grades);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new GradeController();
