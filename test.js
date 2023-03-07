const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'phonglh',
  password: 'phonglh',
  database: 'test_db',
});

module.exports = connection;

// sau khi hoàn tất thao tác, bạn có thể đóng kết nối với cơ sở dữ liệu như sau
connection.end();
