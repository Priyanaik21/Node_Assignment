const Department = require('../models/department');

class DepartmentService {
  async createDepartment(departmentData) {
    try {
      const department = await Department.create(departmentData);
      return department;
    } catch (error) {
      throw error;
    }
  }

  async getDepartmentById(department_id) {
    try {
      const department = await Department.findByPk(department_id);
      if (!department) {
        throw new Error('Department not found');
      }
      return department;
    } catch (error) {
      throw error;
    }
  }

  async updateDepartment(department_id, departmentData) {
    try {
      const department = await Department.findByPk(department_id);
      if (!department) {
        throw new Error('Department not found');
      }
      await department.update(departmentData);
      return department;
    } catch (error) {
      throw error;
    }
  }

  async deleteDepartment(department_id) {
    try {
      const department = await Department.findByPk(department_id);
      if (!department) {
        throw new Error('Department not found');
      }
      await department.destroy();
      return { message: 'Department deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getAllDepartments() {
    try {
      const departments = await Department.findAll();
      return departments;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new DepartmentService();
