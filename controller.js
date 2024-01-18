'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
  response.ok('Aplikasi Res Api berjalan', res);
};

// Menampilkan Semua data User
exports.getAllUser = function (req, res) {
  connection.query('SELECT * FROM users', function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// user by Id
exports.userById = function (req, res) {
  let id = req.params.id;
  connection.query('SELECT *FROM users where id = ?', [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
