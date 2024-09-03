const Grade = require('../models/Grade');

class GradeService {
  async createGrade(gradeData) {
    try {
      const grade = await Grade.create(gradeData);
      return grade;
    } catch (error) {
      throw error;
    }
  }

  async getGradeById(grade_id) {
    try {
      const grade = await Grade.findByPk(grade_id);
      if (!grade) {
        throw new Error('Grade not found');
      }
      return grade;
    } catch (error) {
      throw error;
    }
  }

  async updateGrade(grade_id, gradeData) {
    try {
      const grade = await Grade.findByPk(grade_id);
      if (!grade) {
        throw new Error('Grade not found');
      }
      await grade.update(gradeData);
      return grade;
    } catch (error) {
      throw error;
    }
  }

  async deleteGrade(grade_id) {
    try {
      const grade = await Grade.findByPk(grade_id);
      if (!grade) {
        throw new Error('Grade not found');
      }
      await grade.destroy();
      return { message: 'Grade deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllGrades() {
    try {
      const grades = await Grade.findAll();
      return grades;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new GradeService();
