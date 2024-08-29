const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database.js');
const UserInformation = require('./userInformation.js'); 
const Instructor = sequelize.define(
  'Instructor', 
  {
    instructor_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'userInformations', 
        key: 'user_id',
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
    tableName: 'instructors',
    paranoid: true, 
  }
);

Instructor.associate = function(models) {
  Instructor.belongsTo(models.UserInformation, {
    foreignKey: 'user_id',
    as: 'userInformation',
  });
};

module.exports = Instructor;
