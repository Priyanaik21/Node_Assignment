const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const Grade = sequelize.define(
  'Grade', 
  {
    grade_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    student_course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'studentCourses', 
        key: 'student_course_id',
      },
      onDelete: 'CASCADE',
    },
    grade: {
      type: DataTypes.CHAR(2),
      allowNull: true,
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
    tableName: 'grades', 
    paranoid: true, 
  }
);

Grade.associate = function(models) {
  Grade.belongsTo(models.StudentCourse, { 
    foreignKey: 'student_course_id',
    as: 'studentCourse',
  });
};

console.log(Grade === sequelize.models.Grade);

module.exports = Grade;
