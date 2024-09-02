const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const InstructorCourse = sequelize.define(
  'InstructorCourse', 
  {
    instructor_course_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'instructors',
        key: 'instructor_id',
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
    tableName: 'instructorCourses', 
    paranoid: true, 
  }
);

InstructorCourse.associate = function(models) {
  InstructorCourse.belongsTo(models.Instructor, { 
    foreignKey: 'instructor_id',
    as: 'instructor',
  });
  InstructorCourse.belongsTo(models.Course, { 
    foreignKey: 'course_id',
    as: 'course',
  });
};

console.log(InstructorCourse === sequelize.models.InstructorCourse);

module.exports = InstructorCourse;
