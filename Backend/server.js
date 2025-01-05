
const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");
const facultyRoutes = require("./routes/facultyRoutes");
const authRoutes = require("./routes/authRoutes");
//const studentRoutes = require("./routes/studentRoutes1");
const recruiterRoutes = require("./routes/recruiterRoutes");
const internshipRoutes = require("./routes/internshipRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const placementRoutes = require("./routes/placementRoutes");
const skillRoutes = require("./routes/skillRoutes");
const facultydashRoutes = require('./routes/facultydashRoutes');
const stddetailsRoutes = require('./routes/stddetailsRoutes');
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors()); // Ensure CORS is set up to allow requests from your frontend
app.use(bodyParser.json());

// Ensure that the route is properly connected to your controller
app.use("/api", studentRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/auth", authRoutes);
//app.use("/api/students", studentRoutes);
app.use("/api/recruiters", recruiterRoutes);
app.use("/api/internships", internshipRoutes);
app.use("/api/interviews", interviewRoutes);
app.use("/api/placements", placementRoutes);
app.use("/api/skills", skillRoutes);
app.use('/api/faculty1', facultydashRoutes);
app.use('/api/',stddetailsRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
