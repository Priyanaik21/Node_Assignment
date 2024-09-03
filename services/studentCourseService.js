const StudentCourse = require('../models/studentCourse');
const Student = require('../models/students');
const Course = require('../models/course');

class StudentCourseService {
  async createStudentCourse(studentCourseData) {
    try {
      const studentCourse = await StudentCourse.create(studentCourseData);
      return studentCourse;
    } catch (error) {
      throw error;
    }
  }

  async getStudentCourseById(student_course_id) {
    try {
      const studentCourse = await StudentCourse.findByPk(student_course_id, {
      });
      if (!studentCourse) {
        throw new Error('StudentCourse not found');
      }
      return studentCourse;
    } catch (error) {
      throw error;
    }
  }

  async updateStudentCourse(student_course_id, studentCourseData) {
    try {
      const studentCourse = await StudentCourse.findByPk(student_course_id);
      if (!studentCourse) {
        throw new Error('StudentCourse not found');
      }
      await studentCourse.update(studentCourseData);
      return studentCourse;
    } catch (error) {
      throw error;
    }
  }

  async deleteStudentCourse(student_course_id) {
    try {
      const studentCourse = await StudentCourse.findByPk(student_course_id);
      if (!studentCourse) {
        throw new Error('StudentCourse not found');
      }
      await studentCourse.destroy();
      return { message: 'StudentCourse deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllStudentCourses() {
    try {
      const studentCourses = await StudentCourse.findAll({
      });
      return studentCourses;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new StudentCourseService();
