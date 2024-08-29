const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const userInformation = sequelize.define('userInformation', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  F_name: {
    type: DataTypes.STRING(50),
  },
  L_name: {
    type: DataTypes.STRING(50),
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  address: {
    type: DataTypes.STRING(100),
    allowNull: false,
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
  tableName: 'userInformation', 
});


userInformation.associate = function(models) {
  userInformation.hasOne(models.students, {
    foreignKey: 'user_id',
    as: 'students',
  });
  userInformation.hasOne(models.instructor, {
    foreignKey: 'user_id',
    as: 'instructor',
  });
};

module.exports = userInformation;
