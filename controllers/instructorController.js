const InstructorService = require('../services/instructorService');
const {
  CREATE_USER_ERROR,
  USER_NOT_FOUND,
  UPDATE_USER_ERROR,
  DELETE_USER_ERROR,
  GET_USER_ERROR,
} = require('../utils/errorMessage.js');

const {
  BAD_REQUEST,
  CREATED,
  OK,
  NOT_FOUND,
} = require('../utils/statusCode.js');

class InstructorController {
  async createInstructor(req, res) {
    try {
      const instructor = await InstructorService.createInstructor(req.body);
      res.status(CREATED).json(instructor);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_USER_ERROR });
    }
  }

  async getInstructorById(req, res) {
    try {
      const instructor = await InstructorService.getInstructorById(req.params.instructor_id);
      res.status(OK).json(instructor);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: USER_NOT_FOUND });
    }
  }

  async updateInstructor(req, res) {
    try {
      const instructor = await InstructorService.updateInstructor(req.params.instructor_id, req.body);
      res.status(OK).json(instructor);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_USER_ERROR });
    }
  }

  async deleteInstructor(req, res) {
    try {
      const result = await InstructorService.deleteInstructor(req.params.instructor_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_USER_ERROR });
    }
  }

  async getAllInstructors(req, res) {
    try {
      const instructors = await InstructorService.getAllInstructors();
      res.status(OK).json(instructors);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_USER_ERROR });
    }
  }
}

module.exports = new InstructorController();
