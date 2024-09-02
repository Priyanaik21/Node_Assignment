const Course = require('../models/course');

class CourseService {
  async createCourse(courseData) {
    try {
      const course = await Course.create(courseData);
      return course;
    } catch (error) {
      throw error;
    }
  }

  async getCourseById(course_id) {
    try {
      const course = await Course.findByPk(course_id);
      if (!course) {
        throw new Error('Course not found');
      }
      return course;
    } catch (error) {
      throw error;
    }
  }

  async updateCourse(course_id, courseData) {
    try {
      const course = await Course.findByPk(course_id);
      if (!course) {
        throw new Error('Course not found');
      }
      await course.update(courseData);
      return course;
    } catch (error) {
      throw error;
    }
  }

  async deleteCourse(course_id) {
    try {
      const course = await Course.findByPk(course_id);
      if (!course) {
        throw new Error('Course not found');
      }
      await course.destroy();
      return { message: 'Course deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllCourses() {
    try {
      const courses = await Course.findAll();
      return courses;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CourseService();
