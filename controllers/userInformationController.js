const UserInformationService = require('../services/userInformationService');

class UserInformationController {
  async createUser(req, res) {
    console.log(req.body);
    
    try {
      const user = await UserInformationService.createUser(req.body);
      console.log(user);
      
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await UserInformationService.getUserById(req.params.user_id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await UserInformationService.updateUser(req.params.user_id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const result = await UserInformationService.deleteUser(req.params.user_id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await UserInformationService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UserInformationController();
