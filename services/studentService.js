const Student = require('../models/students');
const userInformation=require("../models/userInformation")

class StudentService {
  async createStudent(studentData) {
    try {
      const student = await Student.create(studentData);
      return student;
    } catch (error) {
      throw error;
    }
  }

  async getStudentById(student_id) {
    try {
      const student = await Student.findByPk(student_id, {
      });
      if (!student) {
        throw new Error('Student not found');
      }
      return student;
    } catch (error) {
      throw error;
    }
  }

  async updateStudent(student_id, studentData) {
    try {
      const student = await Student.findByPk(student_id);
      if (!student) {
        throw new Error('Student not found');
      }
      await student.update(studentData);
      return student;
    } catch (error) {
      throw error;
    }
  }

  async deleteStudent(student_id) {
    try {
      const student = await Student.findByPk(student_id);
      if (!student) {
        throw new Error('Student not found');
      }
      await student.destroy();
      return { message: 'Student deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllStudents() {
    try {
      const students = await Student.findAll({
      });
      return students;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new StudentService();
