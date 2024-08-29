const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Course = require('./course.js');
const Semester = require('./semester.js');

const CourseSemester = sequelize.define(
  'CourseSemester',
  {
    course_semester_id: {
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
    semester_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Semester, 
        key: 'semester_id',
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
    tableName: 'courseSemesters',
    paranoid: true, 
  }
);

CourseSemester.associate = function(models) {
  CourseSemester.belongsTo(models.Course, {
    foreignKey: 'course_id',
    as: 'course',
  });
  CourseSemester.belongsTo(models.Semester, {
    foreignKey: 'semester_id',
    as: 'semester',
  });
};

console.log(CourseSemester === sequelize.models.CourseSemester);

module.exports = CourseSemester;
