const UserInformationService = require('../services/userInformationService');

const {
  CREATE_USER_ERROR,
  USER_NOT_FOUND,
  UPDATE_USER_ERROR,
  DELETE_USER_ERROR,
  GET_USER_ERROR,
} = require("../utils/errorMessage.js");

const {
  BAD_REQUEST,
  CREATED,
  OK,
  NOT_FOUND,
}= require("../utils/statusCode.js");


class UserInformationController {
  async createUser(req, res) {
    console.log(req.body);
    
    try {
      const user = await UserInformationService.createUser(req.body);
      console.log(user);
      
      res.status(CREATED).json(user);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: CREATE_USER_ERROR });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await UserInformationService.getUserById(req.params.user_id);
      res.status(OK).json(user);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: USER_NOT_FOUND });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await UserInformationService.updateUser(req.params.user_id, req.body);
      res.status(OK).json(user);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: UPDATE_USER_ERROR });
    }
  }

  async deleteUser(req, res) {
    try {
      const result = await UserInformationService.deleteUser(req.params.user_id);
      res.status(OK).json(result);
    } catch (error) {
      res.status(NOT_FOUND).json({ error: DELETE_USER_ERROR });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await UserInformationService.getAllUsers();
      res.status(OK).json(users);
    } catch (error) {
      res.status(BAD_REQUEST).json({ error: GET_USER_ERROR});
    }
  }
}

module.exports = new UserInformationController();
