'use strict';
const { Sequelize } = require('sequelize');
const course = 'courses'; 
const department = 'departments'; 

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courseDepartments', {
      course_department_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: course, 
          key: 'course_id',
        },
        onDelete: 'CASCADE',
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: department, 
          key: 'department_id',
        },
        onDelete: 'CASCADE',
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('courseDepartments');
  }
};
