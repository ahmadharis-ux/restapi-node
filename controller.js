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

// Menambahkan data Mahasiswa
exports.storeData = function (req, res) {
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query('INSERT INTO mahasiswa (nama, jurusan) VALUES (?,?)', [nama, jurusan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok('Berhasil menambahkan data', res);
    }
  });
};

// Edit data mahasiswa
exports.updateData = function (req, res) {
  var id = req.body.id;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query('UPDATE mahasiswa SET nama=?, jurusan=? where id=?', [nama, jurusan, id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok('Berhasil Mengubah data', res);
    }
  });
};

// Delete data mahasiswa
exports.deleteData = function (req, res) {
  var id = req.body.id;

  connection.query('DELETE FROM mahasiswa WHERE id = ?', [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok('Berhasil di hapus', res);
    }
  });
};

// Manampilkan mata kuliah group
exports.tampilGroup = function (req, res) {
  connection.query(
    'SELECT mahasiswa.id, mahasiswa.nama, mahasiswa.jurusan, mata_kuliah.nama_matkul FROM krs JOIN mata_kuliah JOIN mahasiswa WHERE krs.matkul_id = mata_kuliah.id AND krs.mahasiswa_id = mahasiswa.id ORDER BY mahasiswa.id',
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.oknested(rows, res);
      }
    }
  );
};
