const CourseSemesterService = require('../services/courseSemesterService');

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
} = require("../utils/statusCode.js");

class CourseSemesterController {
  async createCourseSemester(req, res) {
    try {
      const courseSemester = await CourseSemesterService.createCourseSemester(req.body);
      res.status(CREATED).json(courseSemester);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getCourseSemesterById(req, res) {
    try {
      const courseSemester = await CourseSemesterService.getCourseSemesterById(req.params.course_semester_id);
      res.status(OK).json(courseSemester);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateCourseSemester(req, res) {
    try {
      const courseSemester = await CourseSemesterService.updateCourseSemester(req.params.course_semester_id, req.body);
      res.status(OK).json(courseSemester);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteCourseSemester(req, res) {
    try {
      const result = await CourseSemesterService.deleteCourseSemester(req.params.course_semester_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllCourseSemesters(req, res) {
    try {
      const courseSemesters = await CourseSemesterService.getAllCourseSemesters();
      res.status(OK).json(courseSemesters);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new CourseSemesterController();
