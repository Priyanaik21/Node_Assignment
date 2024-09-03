const DepartmentService = require('../services/departmentService');

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

class DepartmentController {
  async createDepartment(req, res) {
    try {
      const department = await DepartmentService.createDepartment(req.body);
      res.status(CREATED).json(department);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getDepartmentById(req, res) {
    try {
      const department = await DepartmentService.getDepartmentById(req.params.department_id);
      res.status(OK).json(department);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateDepartment(req, res) {
    try {
      const department = await DepartmentService.updateDepartment(req.params.department_id, req.body);
      res.status(OK).json(department);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteDepartment(req, res) {
    try {
      const result = await DepartmentService.deleteDepartment(req.params.department_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllDepartments(req, res) {
    try {
      const departments = await DepartmentService.getAllDepartments();
      res.status(OK).json(departments);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new DepartmentController();
