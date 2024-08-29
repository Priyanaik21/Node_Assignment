const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database.js');
const students = require('./students.js');
const instructor = require('./instructor.js');

const studentInstructor = sequelize.define(
  'StudentInstructor', 
  {
    student_instructor_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'students', 
        key: 'student_id',
      },
      onDelete: 'CASCADE',
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'instructors', 
        key: 'instructor_id',
      },
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
    tableName: 'studentInstructors', 
    paranoid: true, 
  }
);

studentInstructor.associate = function(models) {
  studentInstructor.belongsTo(models.Students, {
    foreignKey: 'student_id',
    as: 'student',
  });
  studentInstructor.belongsTo(models.Instructor, {
    foreignKey: 'instructor_id',
    as: 'instructor',
  });
};

module.exports = studentInstructor;

