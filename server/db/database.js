require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name
});

module.exports = pool.promise();
