const sequelize = require("./database");
const userInformation = require("./models/userInformation.js");
const students = require("./models/students.js");
const instructor = require("./models/instructor.js");
const course = require("./models/course.js");
const studentCourse = require("./models/studentCourse.js");
const grade = require("./models/grade.js");
const department = require("./models/department.js");
const semester = require("./models/semester.js");
const courseSemester = require("./models/courseSemester.js");
const studentInstructor = require("./models/studentInstructor.js");
const studentDepartment = require("./models/studentDepartment.js");
const instructorDepartment = require("./models/instructorDepartment.js");
const instructorCourse = require("./models/instructorCourse.js");
const courseDepartment = require("./models/courseDepartment.js");

sequelize.sync({ force: false }); 

