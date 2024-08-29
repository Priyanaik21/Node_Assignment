const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("collegedb", "root", "priyanaik", {
  dialect: "mysql",

  host: "localhost",
});

module.exports = sequelize;