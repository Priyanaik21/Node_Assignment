const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const studentCourse = sequelize.define(
  'StudentCourse', 
  {
    student_course_id: {
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
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'courses', 
        key: 'course_id',
      },
      onDelete: 'CASCADE',
    },
    fee_paid: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    enrollment_date: {
      type: DataTypes.DATE,
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
    tableName: 'studentCourses', 
    paranoid: true, 
  }
);

studentCourse.associate = function(models) {
  studentCourse.belongsTo(models.Students, { 
    foreignKey: 'student_id',
    as: 'student',
  });
  studentCourse.belongsTo(models.Course, { 
    foreignKey: 'course_id',
    as: 'course',
  });
};

console.log(studentCourse === sequelize.models.StudentCourse); 

module.exports = studentCourse;
