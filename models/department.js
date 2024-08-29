const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const department = sequelize.define(
  'department',
  {
    department_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    department_name: {
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
  },
);

console.log(department === sequelize.models.department);

module.exports = department;
