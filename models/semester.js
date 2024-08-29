const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const semester = sequelize.define(
  'semester',
  {
    semester_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    semester_name: {
      type: DataTypes.STRING(50),
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
  }
);

console.log(semester === sequelize.models.semester);

module.exports = semester;
