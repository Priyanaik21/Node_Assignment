const InstructorCourse = require('../models/instructorCourse');

class InstructorCourseService {
  async createInstructorCourse(instructorCourseData) {
    try {
      const instructorCourse = await InstructorCourse.create(instructorCourseData);
      return instructorCourse;
    } catch (error) {
      throw error;
    }
  }

  async getInstructorCourseById(instructor_course_id) {
    try {
      const instructorCourse = await InstructorCourse.findByPk(instructor_course_id, {
      });
      if (!instructorCourse) {
        throw new Error('InstructorCourse not found');
      }
      return instructorCourse;
    } catch (error) {
      throw error;
    }
  }

  async updateInstructorCourse(instructor_course_id, instructorCourseData) {
    try {
      const instructorCourse = await InstructorCourse.findByPk(instructor_course_id);
      if (!instructorCourse) {
        throw new Error('InstructorCourse not found');
      }
      await instructorCourse.update(instructorCourseData);
      return instructorCourse;
    } catch (error) {
      throw error;
    }
  }

  async deleteInstructorCourse(instructor_course_id) {
    try {
      const instructorCourse = await InstructorCourse.findByPk(instructor_course_id);
      if (!instructorCourse) {
        throw new Error('InstructorCourse not found');
      }
      await instructorCourse.destroy();
      return { message: 'InstructorCourse deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllInstructorCourses() {
    try {
      const instructorCourses = await InstructorCourse.findAll({
      });
      return instructorCourses;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new InstructorCourseService();
