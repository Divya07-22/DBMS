

// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const loginUser = async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ error: "Email and password are required." });
//     }

//     User.findByEmail(email, async (err, results) => {
//         if (err) return res.status(500).json({ error: "Database error." });
//         if (results.length === 0) {
//             return res.status(401).json({ error: "Invalid email or password." });
//         }

//         const user = results[0];

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ error: "Invalid email or password." });
//         }

//         const token = jwt.sign(
//             { id: user.id, role: user.role },
//             process.env.JWT_SECRET || "your_jwt_secret",
//             { expiresIn: "1h" }
//         );

//         res.json({ token, user: { email: user.email, role: user.role } });
//     });
// };

// module.exports = { loginUser };


const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    // Check if user exists in the database
    User.findByEmail(email, async (err, results) => {
        if (err) return res.status(500).json({ error: "Database error." });
        if (results.length === 0) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        const user = results[0];

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        // Verify user role (ensure coordinator)
        if (user.role !== "coordinator") {
            return res.status(403).json({ error: "Access denied. Not a coordinator." });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET || "your_jwt_secret",
            { expiresIn: "1h" }
        );

        // Send response
        res.json({ token, user: { email: user.email, role: user.role } });
    });
};

module.exports = { loginUser };
