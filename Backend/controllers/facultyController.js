const bcrypt = require("bcrypt");
const Faculty = require("../models/Faculty");

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        Faculty.create({ name, email, password: hashedPassword }, (err, result) => {
            if (err) return res.status(500).json({ error: "Database error" });
            res.status(201).json({ message: "Faculty signed up successfully!" });
        });
    } catch (error) {
        res.status(500).json({ error: "Error processing request" });
    }
};
