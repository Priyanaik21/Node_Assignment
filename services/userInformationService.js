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

  async getAllUsers(page = 1, limit = 10) {
    try {
      const offset = (page - 1) * limit;
      const { rows, count } = await UserInformation.findAndCountAll({
        limit,
        offset,
      });
      return {
        users: rows,
        totalUsers: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserInformationService();