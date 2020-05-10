const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

//create connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

//export connetion
module.exports = pool;