const SemesterService = require('../services/semesterService');
const {
  CREATE_ENTITY_ERROR,
  ENTITY_NOT_FOUND,
  UPDATE_ENTITY_ERROR,
  DELETE_ENTITY_ERROR,
  GET_ENTITY_ERROR,
} = require('../utils/errorMessage.js');

const {
  BAD_REQUEST,
  CREATED,
  OK,
  NOT_FOUND,
} = require('../utils/statusCode.js');

class SemesterController {
  async createSemester(req, res) {
    try {
      const semester = await SemesterService.createSemester(req.body);
      res.status(CREATED).json(semester);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getSemesterById(req, res) {
    try {
      const semester = await SemesterService.getSemesterById(req.params.semester_id);
      res.status(OK).json(semester);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateSemester(req, res) {
    try {
      const semester = await SemesterService.updateSemester(req.params.semester_id, req.body);
      res.status(OK).json(semester);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteSemester(req, res) {
    try {
      const result = await SemesterService.deleteSemester(req.params.semester_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllSemesters(req, res) {
    try {
      const semesters = await SemesterService.getAllSemesters();
      res.status(OK).json(semesters);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new SemesterController();
