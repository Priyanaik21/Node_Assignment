const InstructorDepartment = require('../models/instructorDepartment');

class InstructorDepartmentService {
  async createInstructorDepartment(instructorDepartmentData) {
    try {
      const instructorDepartment = await InstructorDepartment.create(instructorDepartmentData);
      return instructorDepartment;
    } catch (error) {
      throw error;
    }
  }

  async getInstructorDepartmentById(instructor_department_id) {
    try {
      const instructorDepartment = await InstructorDepartment.findByPk(instructor_department_id, {
      });
      if (!instructorDepartment) {
        throw new Error('InstructorDepartment not found');
      }
      return instructorDepartment;
    } catch (error) {
      throw error;
    }
  }

  async updateInstructorDepartment(instructor_department_id, instructorDepartmentData) {
    try {
      const instructorDepartment = await InstructorDepartment.findByPk(instructor_department_id);
      if (!instructorDepartment) {
        throw new Error('InstructorDepartment not found');
      }
      await instructorDepartment.update(instructorDepartmentData);
      return instructorDepartment;
    } catch (error) {
      throw error;
    }
  }

  async deleteInstructorDepartment(instructor_department_id) {
    try {
      const instructorDepartment = await InstructorDepartment.findByPk(instructor_department_id);
      if (!instructorDepartment) {
        throw new Error('InstructorDepartment not found');
      }
      await instructorDepartment.destroy();
      return { message: 'InstructorDepartment deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllInstructorDepartments() {
    try {
      const instructorDepartments = await InstructorDepartment.findAll({
      });
      return instructorDepartments;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new InstructorDepartmentService();
