const StudentDepartmentService = require('../services/studentDepartmentService');

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

class StudentDepartmentController {
  async createStudentDepartment(req, res) {
    try {
      const studentDepartment = await StudentDepartmentService.createStudentDepartment(req.body);
      res.status(CREATED).json(studentDepartment);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getStudentDepartmentById(req, res) {
    try {
      const studentDepartment = await StudentDepartmentService.getStudentDepartmentById(req.params.student_department_id);
      res.status(OK).json(studentDepartment);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateStudentDepartment(req, res) {
    try {
      const studentDepartment = await StudentDepartmentService.updateStudentDepartment(req.params.student_department_id, req.body);
      res.status(OK).json(studentDepartment);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteStudentDepartment(req, res) {
    try {
      const result = await StudentDepartmentService.deleteStudentDepartment(req.params.student_department_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllStudentDepartments(req, res) {
    try {
      const studentDepartments = await StudentDepartmentService.getAllStudentDepartments();
      res.status(OK).json(studentDepartments);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new StudentDepartmentController();
