const Semester = require('../models/semester');

class SemesterService {
  async createSemester(semesterData) {
    try {
      const semester = await Semester.create(semesterData);
      return semester;
    } catch (error) {
      throw error;
    }
  }

  async getSemesterById(semester_id) {
    try {
      const semester = await Semester.findByPk(semester_id);
      if (!semester) {
        throw new Error('Semester not found');
      }
      return semester;
    } catch (error) {
      throw error;
    }
  }

  async updateSemester(semester_id, semesterData) {
    try {
      const semester = await Semester.findByPk(semester_id);
      if (!semester) {
        throw new Error('Semester not found');
      }
      await semester.update(semesterData);
      return semester;
    } catch (error) {
      throw error;
    }
  }

  async deleteSemester(semester_id) {
    try {
      const semester = await Semester.findByPk(semester_id);
      if (!semester) {
        throw new Error('Semester not found');
      }
      await semester.destroy();
      return { message: 'Semester deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllSemesters() {
    try {
      const semesters = await Semester.findAll();
      return semesters;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new SemesterService();
