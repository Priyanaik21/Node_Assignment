const StudentCourseService = require('../services/studentCourseService');

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

class StudentCourseController {
  async createStudentCourse(req, res) {
    try {
      const studentCourse = await StudentCourseService.createStudentCourse(req.body);
      res.status(CREATED).json(studentCourse);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getStudentCourseById(req, res) {
    try {
      const studentCourse = await StudentCourseService.getStudentCourseById(req.params.student_course_id);
      res.status(OK).json(studentCourse);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateStudentCourse(req, res) {
    try {
      const studentCourse = await StudentCourseService.updateStudentCourse(req.params.student_course_id, req.body);
      res.status(OK).json(studentCourse);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteStudentCourse(req, res) {
    try {
      const result = await StudentCourseService.deleteStudentCourse(req.params.student_course_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllStudentCourses(req, res) {
    try {
      const studentCourses = await StudentCourseService.getAllStudentCourses();
      res.status(OK).json(studentCourses);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new StudentCourseController();
