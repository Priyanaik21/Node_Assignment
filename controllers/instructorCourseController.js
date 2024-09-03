const InstructorCourseService = require('../services/instructorCourseService');

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

class InstructorCourseController {
  async createInstructorCourse(req, res) {
    try {
      const instructorCourse = await InstructorCourseService.createInstructorCourse(req.body);
      res.status(CREATED).json(instructorCourse);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getInstructorCourseById(req, res) {
    try {
      const instructorCourse = await InstructorCourseService.getInstructorCourseById(req.params.instructor_course_id);
      res.status(OK).json(instructorCourse);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateInstructorCourse(req, res) {
    try {
      const instructorCourse = await InstructorCourseService.updateInstructorCourse(req.params.instructor_course_id, req.body);
      res.status(OK).json(instructorCourse);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteInstructorCourse(req, res) {
    try {
      const result = await InstructorCourseService.deleteInstructorCourse(req.params.instructor_course_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllInstructorCourses(req, res) {
    try {
      const instructorCourses = await InstructorCourseService.getAllInstructorCourses();
      res.status(OK).json(instructorCourses);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new InstructorCourseController();
