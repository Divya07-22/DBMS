

const db = require("../config/db");
const bcrypt = require("bcryptjs");

const User = {
    findByEmail: (email, callback) => {
        db.query("SELECT * FROM users WHERE email = ?", [email], callback);
    },
    create: (email, password, role, callback) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return callback(err);
            db.query(
                "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
                [email, hash, role],
                callback
            );
        });
    },
};

module.exports = User;
