const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const studentDepartment = sequelize.define(
  'StudentDepartment', 
  {
    student_department_id: {
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
    tableName: 'studentDepartments', 
    paranoid: true, 
  }
);


studentDepartment.associate = function(models) {
  studentDepartment.belongsTo(models.Students, { 
    foreignKey: 'student_id',
    as: 'student',
  });
  studentDepartment.belongsTo(models.Department, { 
    foreignKey: 'department_id',
    as: 'department',
  });
};

console.log(studentDepartment === sequelize.models.StudentDepartment); 

module.exports = studentDepartment;
