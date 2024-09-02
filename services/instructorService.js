const Instructor = require('../models/instructor');

class InstructorService {
  async createInstructor(instructorData) {
    try {
      const instructor = await Instructor.create(instructorData);
      return instructor;
    } catch (error) {
      throw error;
    }
  }

  async getInstructorById(instructor_id) {
    try {
      const instructor = await Instructor.findByPk(instructor_id, {
      });
      if (!instructor) {
        throw new Error('Instructor not found');
      }
      return instructor;
    } catch (error) {
      throw error;
    }
  }

  async updateInstructor(instructor_id, instructorData) {
    try {
      const instructor = await Instructor.findByPk(instructor_id);
      if (!instructor) {
        throw new Error('Instructor not found');
      }
      await instructor.update(instructorData);
      return instructor;
    } catch (error) {
      throw error;
    }
  }

  async deleteInstructor(instructor_id) {
    try {
      const instructor = await Instructor.findByPk(instructor_id);
      if (!instructor) {
        throw new Error('Instructor not found');
      }
      await instructor.destroy();
      return { message: 'Instructor deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllInstructors() {
    try {
      const instructors = await Instructor.findAll({
      });
      return instructors;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new InstructorService();
