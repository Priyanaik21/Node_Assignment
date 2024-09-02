const StudentService = require('../services/studentService');

const {
  CREATE_STUDENT_ERROR,
  STUDENT_NOT_FOUND,
  UPDATE_STUDENT_ERROR,
  DELETE_STUDENT_ERROR,
  GET_STUDENT_ERROR,
} = require("../utils/errorMessage.js");

const {
  BAD_REQUEST,
  CREATED,
  OK,
  NOT_FOUND,
}= require("../utils/statusCode.js");

class StudentController {
  async createStudent(req, res) {
    try {
      const student = await StudentService.createStudent(req.body);
      res.status(CREATED).json(student);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_STUDENT_ERROR });
    }
  }

  async getStudentById(req, res) {
    try {
      const student = await StudentService.getStudentById(req.params.student_id);
      res.status(OK).json(student);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: STUDENT_NOT_FOUND });
    }
  }

  async updateStudent(req, res) {
    try {
      const student = await StudentService.updateStudent(req.params.student_id, req.body);
      res.status(OK).json(student);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_STUDENT_ERROR });
    }
  }

  async deleteStudent(req, res) {
    try {
      const result = await StudentService.deleteStudent(req.params.student_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_STUDENT_ERROR });
    }
  }

  async getAllStudents(req, res) {
    try {
      const students = await StudentService.getAllStudents();
      res.status(OK).json(students);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_STUDENT_ERROR});
    }
  }
}

module.exports = new StudentController();
