const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const InstructorDepartment = sequelize.define(
  'InstructorDepartment', 
  {
    instructor_department_id: {
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
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departments', 
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
    tableName: 'instructorDepartments', 
    paranoid: true, 
  }
);

InstructorDepartment.associate = function(models) {
  InstructorDepartment.belongsTo(models.Instructor, { 
    foreignKey: 'instructor_id',
    as: 'instructor',
  });
  InstructorDepartment.belongsTo(models.Department, { 
    foreignKey: 'department_id',
    as: 'department',
  });
};

console.log(InstructorDepartment === sequelize.models.InstructorDepartment);

module.exports = InstructorDepartment;
