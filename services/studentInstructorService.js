const StudentInstructor = require('../models/studentInstructor');

class StudentInstructorService {
  async createStudentInstructor(data) {
    try {
      const studentInstructor = await StudentInstructor.create(data);
      return studentInstructor;
    } catch (error) {
      throw error;
    }
  }

  async getStudentInstructorById(id) {
    try {
      const studentInstructor = await StudentInstructor.findByPk(id, {
      });
      if (!studentInstructor) {
        throw new Error('StudentInstructor not found');
      }
      return studentInstructor;
    } catch (error) {
      throw error;
    }
  }

  async updateStudentInstructor(id, data) {
    try {
      const studentInstructor = await StudentInstructor.findByPk(id);
      if (!studentInstructor) {
        throw new Error('StudentInstructor not found');
      }
      await studentInstructor.update(data);
      return studentInstructor;
    } catch (error) {
      throw error;
    }
  }

  async deleteStudentInstructor(id) {
    try {
      const studentInstructor = await StudentInstructor.findByPk(id);
      if (!studentInstructor) {
        throw new Error('StudentInstructor not found');
      }
      await studentInstructor.destroy();
      return { message: 'StudentInstructor deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllStudentInstructors() {
    try {
      const studentInstructors = await StudentInstructor.findAll({
      });
      return studentInstructors;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new StudentInstructorService();
