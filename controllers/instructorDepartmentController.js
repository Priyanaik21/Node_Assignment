const InstructorDepartmentService = require('../services/instructorDepartmentService');

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

class InstructorDepartmentController {
  async createInstructorDepartment(req, res) {
    try {
      const instructorDepartment = await InstructorDepartmentService.createInstructorDepartment(req.body);
      res.status(CREATED).json(instructorDepartment);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getInstructorDepartmentById(req, res) {
    try {
      const instructorDepartment = await InstructorDepartmentService.getInstructorDepartmentById(req.params.instructor_department_id);
      res.status(OK).json(instructorDepartment);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateInstructorDepartment(req, res) {
    try {
      const instructorDepartment = await InstructorDepartmentService.updateInstructorDepartment(req.params.instructor_department_id, req.body);
      res.status(OK).json(instructorDepartment);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteInstructorDepartment(req, res) {
    try {
      const result = await InstructorDepartmentService.deleteInstructorDepartment(req.params.instructor_department_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllInstructorDepartments(req, res) {
    try {
      const instructorDepartments = await InstructorDepartmentService.getAllInstructorDepartments();
      res.status(OK).json(instructorDepartments);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new InstructorDepartmentController();
