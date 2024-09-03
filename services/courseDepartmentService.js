const CourseDepartment = require('../models/courseDepartment');

class CourseDepartmentService {
  async createCourseDepartment(courseDepartmentData) {
    try {
      const courseDepartment = await CourseDepartment.create(courseDepartmentData);
      return courseDepartment;
    } catch (error) {
      throw error;
    }
  }

  async getCourseDepartmentById(course_department_id) {
    try {
      const courseDepartment = await CourseDepartment.findByPk(course_department_id, {
      });
      if (!courseDepartment) {
        throw new Error('CourseDepartment not found');
      }
      return courseDepartment;
    } catch (error) {
      throw error;
    }
  }

  async updateCourseDepartment(course_department_id, courseDepartmentData) {
    try {
      const courseDepartment = await CourseDepartment.findByPk(course_department_id);
      if (!courseDepartment) {
        throw new Error('CourseDepartment not found');
      }
      await courseDepartment.update(courseDepartmentData);
      return courseDepartment;
    } catch (error) {
      throw error;
    }
  }

  async deleteCourseDepartment(course_department_id) {
    try {
      const courseDepartment = await CourseDepartment.findByPk(course_department_id);
      if (!courseDepartment) {
        throw new Error('CourseDepartment not found');
      }
      await courseDepartment.destroy();
      return { message: 'CourseDepartment deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllCourseDepartments() {
    try {
      const courseDepartments = await CourseDepartment.findAll({
      });
      return courseDepartments;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CourseDepartmentService();
