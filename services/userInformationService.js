const UserInformation = require('../models/userInformation');

class UserInformationService {
  async createUser(userData) {
    try {
      const user = await UserInformation.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(user_id) {
    try {
      const user = await UserInformation.findByPk(user_id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(user_id, userData) {
    try {
      const user = await UserInformation.findByPk(user_id);
      if (!user) {
        throw new Error('User not found');
      }
      await user.update(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(user_id) {
    try {
      const user = await UserInformation.findByPk(user_id);
      if (!user) {
        throw new Error('User not found');
      }
      await user.destroy();
      return { message: 'User deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const users = await UserInformation.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserInformationService();
