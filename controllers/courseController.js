const CourseService = require('../services/courseService');

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

class CourseController {
  async createCourse(req, res) {
    try {
      const course = await CourseService.createCourse(req.body);
      res.status(CREATED).json(course);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getCourseById(req, res) {
    try {
      const course = await CourseService.getCourseById(req.params.course_id);
      res.status(OK).json(course);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateCourse(req, res) {
    try {
      const course = await CourseService.updateCourse(req.params.course_id, req.body);
      res.status(OK).json(course);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteCourse(req, res) {
    try {
      const result = await CourseService.deleteCourse(req.params.course_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllCourses(req, res) {
    try {
      const courses = await CourseService.getAllCourses();
      res.status(OK).json(courses);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new CourseController();
