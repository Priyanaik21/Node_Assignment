const express = require('express');
const app = express();

const userInformationRoutes = require('./routes/userInformationRoutes');

app.use(express.json());
app.use("/api",userInformationRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
