var mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api',
  // port: '3000'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('mysql terkoneksi');
});

module.exports = connection;
