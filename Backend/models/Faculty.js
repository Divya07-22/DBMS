const db = require("../config/db");

const Faculty = {
    create: (data, callback) => {
        const query = "INSERT INTO faculties (name, email, password) VALUES (?, ?, ?)";
        db.query(query, [data.name, data.email, data.password], callback);
    },
};

module.exports = Faculty;
