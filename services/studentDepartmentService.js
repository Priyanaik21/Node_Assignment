const StudentDepartment = require('../models/studentDepartment');

class StudentDepartmentService {
  async createStudentDepartment(studentDepartmentData) {
    try {
      const studentDepartment = await StudentDepartment.create(studentDepartmentData);
      return studentDepartment;
    } catch (error) {
      throw error;
    }
  }

  async getStudentDepartmentById(student_department_id) {
    try {
      const studentDepartment = await StudentDepartment.findByPk(student_department_id, {
      });
      if (!studentDepartment) {
        throw new Error('StudentDepartment not found');
      }
      return studentDepartment;
    } catch (error) {
      throw error;
    }
  }

  async updateStudentDepartment(student_department_id, studentDepartmentData) {
    try {
      const studentDepartment = await StudentDepartment.findByPk(student_department_id);
      if (!studentDepartment) {
        throw new Error('StudentDepartment not found');
      }
      await studentDepartment.update(studentDepartmentData);
      return studentDepartment;
    } catch (error) {
      throw error;
    }
  }

  async deleteStudentDepartment(student_department_id) {
    try {
      const studentDepartment = await StudentDepartment.findByPk(student_department_id);
      if (!studentDepartment) {
        throw new Error('StudentDepartment not found');
      }
      await studentDepartment.destroy();
      return { message: 'StudentDepartment deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllStudentDepartments() {
    try {
      const studentDepartments = await StudentDepartment.findAll({
      });
      return studentDepartments;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new StudentDepartmentService();
