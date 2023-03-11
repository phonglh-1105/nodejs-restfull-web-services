const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'phonglh-1105',
});
connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});
