var mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('mysql terkoneksi');
});

module.exports = conn;
