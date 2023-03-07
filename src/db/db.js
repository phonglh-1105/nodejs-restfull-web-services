'use strict';
const mysql = require('mysql');
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'phonglh',
  password: process.env.DB_PASSWORD || 'phonglh',
  database: process.env.DB_NAME || 'test_db',
});

module.exports = db;
