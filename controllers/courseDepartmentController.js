const CourseDepartmentService = require('../services/courseDepartmentService');

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

class CourseDepartmentController {
  async createCourseDepartment(req, res) {
    try {
      const courseDepartment = await CourseDepartmentService.createCourseDepartment(req.body);
      res.status(CREATED).json(courseDepartment);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getCourseDepartmentById(req, res) {
    try {
      const courseDepartment = await CourseDepartmentService.getCourseDepartmentById(req.params.course_department_id);
      res.status(OK).json(courseDepartment);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateCourseDepartment(req, res) {
    try {
      const courseDepartment = await CourseDepartmentService.updateCourseDepartment(req.params.course_department_id, req.body);
      res.status(OK).json(courseDepartment);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteCourseDepartment(req, res) {
    try {
      const result = await CourseDepartmentService.deleteCourseDepartment(req.params.course_department_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllCourseDepartments(req, res) {
    try {
      const courseDepartments = await CourseDepartmentService.getAllCourseDepartments();
      res.status(OK).json(courseDepartments);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new CourseDepartmentController();
