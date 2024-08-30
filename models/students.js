const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const students = sequelize.define('students', {
  student_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'userInformations', 
      key: 'user_id',
    },
    unique:true,
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
}, {
  tableName: 'students',
  paranoid: true,
});

students.associate = function(models) {
  students.belongsTo(models.userInformation, {
    foreignKey: 'user_id',
    as: 'userInformation',
  });
  students.hasOne(models.studentInstructor, {
    foreignKey: 'student_id',
    as: 'studentInstructor',
  });
};

module.exports = students;
