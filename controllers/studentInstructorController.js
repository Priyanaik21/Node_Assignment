const StudentInstructorService = require('../services/studentInstructorService');

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

class StudentInstructorController {
  async createStudentInstructor(req, res) {
    try {
      const studentInstructor = await StudentInstructorService.createStudentInstructor(req.body);
      res.status(CREATED).json(studentInstructor);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_ENTITY_ERROR });
    }
  }

  async getStudentInstructorById(req, res) {
    try {
      const studentInstructor = await StudentInstructorService.getStudentInstructorById(req.params.student_instructor_id);
      res.status(OK).json(studentInstructor);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: ENTITY_NOT_FOUND });
    }
  }

  async updateStudentInstructor(req, res) {
    try {
      const studentInstructor = await StudentInstructorService.updateStudentInstructor(req.params.student_instructor_id, req.body);
      res.status(OK).json(studentInstructor);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_ENTITY_ERROR });
    }
  }

  async deleteStudentInstructor(req, res) {
    try {
      const result = await StudentInstructorService.deleteStudentInstructor(req.params.student_instructor_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_ENTITY_ERROR });
    }
  }

  async getAllStudentInstructors(req, res) {
    try {
      const studentInstructors = await StudentInstructorService.getAllStudentInstructors();
      res.status(OK).json(studentInstructors);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_ENTITY_ERROR });
    }
  }
}

module.exports = new StudentInstructorController();
