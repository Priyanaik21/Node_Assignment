const express = require('express');
const app = express();

const userInformationRoutes = require('./routes/userInformationRoutes');
const studentRoutes = require('./routes/studentRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const semesterRoutes = require('./routes/semesterRoutes');
const courseRoutes = require('./routes/courseRoutes');
const departmentRoutes = require('./routes/departmentRoutes.js');
const gradeRoutes = require('./routes/gradeRoutes');
const studentCourseRoutes = require('./routes/studentCourseRoutes');
const studentInstructorRoutes = require('./routes/studentInstructorRoutes');
const studentDepartmentRoutes = require('./routes/studentDepartmentRoutes');
const instructorDepartmentRoutes = require('./routes/instructorDepartmentRoutes');
const instructorCourseRoutes = require('./routes/instructorCourseRoutes');
const courseDepartmentRoutes = require('./routes/courseDepartmentRoutes'); 
const courseSemesterRoutes = require('./routes/courseSemesterRoutes');

app.use(express.json());
app.use("/api",userInformationRoutes);
app.use("/api/student", studentRoutes);
app.use('/api/instructor', instructorRoutes);
app.use('/api/semester', semesterRoutes);
app.use('/api/course',courseRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/grades", gradeRoutes);
app.use("/api/student-courses", studentCourseRoutes);
app.use("/api/student-instructors", studentInstructorRoutes);
app.use("/api/studentDepartments", studentDepartmentRoutes);
app.use("/api/instructorDepartments", instructorDepartmentRoutes);
app.use("/api/instructorCourses", instructorCourseRoutes);
app.use("/api/courseDepartments", courseDepartmentRoutes);
app.use("/api/courseSemesters", courseSemesterRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
