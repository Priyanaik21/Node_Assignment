const express = require('express');
const app = express();

const userInformationRoutes = require('./routes/userInformationRoutes');
const studentRoutes = require('./routes/studentRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const semesterRoutes = require('./routes/semesterRoutes');
const courseRoutes = require('./routes/courseRoutes');


app.use(express.json());
app.use("/api",userInformationRoutes);
app.use("/api/student", studentRoutes);
app.use('/api/instructor', instructorRoutes);
app.use('/api/semester', semesterRoutes);
app.use('/api/course',courseRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
