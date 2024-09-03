const CourseSemester = require('../models/courseSemester');

class CourseSemesterService {
  async createCourseSemester(courseSemesterData) {
    try {
      const courseSemester = await CourseSemester.create(courseSemesterData);
      return courseSemester;
    } catch (error) {
      throw error;
    }
  }

  async getCourseSemesterById(course_semester_id) {
    try {
      const courseSemester = await CourseSemester.findByPk(course_semester_id, {
      });
      if (!courseSemester) {
        throw new Error('CourseSemester not found');
      }
      return courseSemester;
    } catch (error) {
      throw error;
    }
  }

  async updateCourseSemester(course_semester_id, courseSemesterData) {
    try {
      const courseSemester = await CourseSemester.findByPk(course_semester_id);
      if (!courseSemester) {
        throw new Error('CourseSemester not found');
      }
      await courseSemester.update(courseSemesterData);
      return courseSemester;
    } catch (error) {
      throw error;
    }
  }

  async deleteCourseSemester(course_semester_id) {
    try {
      const courseSemester = await CourseSemester.findByPk(course_semester_id);
      if (!courseSemester) {
        throw new Error('CourseSemester not found');
      }
      await courseSemester.destroy();
      return { message: 'CourseSemester deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllCourseSemesters() {
    try {
      const courseSemesters = await CourseSemester.findAll({
      });
      return courseSemesters;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CourseSemesterService();
