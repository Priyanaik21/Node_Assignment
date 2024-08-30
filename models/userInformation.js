const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const userInformation = sequelize.define('userInformations', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  F_name: {
    type: DataTypes.STRING(50),
    allowNull:false,
    validate:{
      len:[1, 50],
    },
  },
  L_name: {
    type: DataTypes.STRING(50),
    allowNull:false,
    validate:{
      len:[1, 50],
    },
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate:{
      len:[5,100],
    },
  },
  address: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      len: [1, 100],
  },
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
  tableName: 'userInformations', 
  paranoid: true,
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
