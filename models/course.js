const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const Course = sequelize.define(
  'course',
  {
    course_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_name: {
      type: DataTypes.STRING(50),
      allowNull: true, 
    },
    duration: {
      type: DataTypes.INTEGER,
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
);

console.log(Course === sequelize.models.course);

module.exports = Course;
