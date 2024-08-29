const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Course = require('./course.js');
const Department = require('./department.js');

const CourseDepartment = sequelize.define(
  'CourseDepartment',
  {
    course_department_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course, 
        key: 'course_id',
      },
      onDelete: 'CASCADE',
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Department, 
        key: 'department_id',
      },
      onDelete: 'CASCADE',
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'courseDepartments', 
    paranoid: true, 
  }
);


CourseDepartment.associate = function(models) {
  CourseDepartment.belongsTo(models.Course, {
    foreignKey: 'course_id',
    as: 'course',
  });
  CourseDepartment.belongsTo(models.Department, {
    foreignKey: 'department_id',
    as: 'department',
  });
};

console.log(CourseDepartment === sequelize.models.CourseDepartment);

module.exports = CourseDepartment;
