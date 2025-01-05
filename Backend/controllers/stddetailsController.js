
const StdDetails = require('../models/stddetailsModel');

exports.getStudentDetails = async (req, res) => {
    const { usn } = req.query;

    try {
        if (!usn) {
            return res.status(400).json({ message: "USN is required" });
        }

        const student = await StdDetails.findByUSN(usn);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(student);
    } catch (error) {
        console.error("Error fetching student details:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

exports.addStudentDetails = async (req, res) => {
    const { usn, username, details } = req.body;

    try {
        if (!usn || !username || !details) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newStudent = await StdDetails.create({ usn, username, details });

        res.status(201).json({ message: "Student added successfully", student: newStudent });
    } catch (error) {
        console.error("Error adding student details:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
