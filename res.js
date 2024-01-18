'use strict';

exports.ok = function (values, res) {
  var data = {
    status: 200,
    values: values,
    message: 'OK',
  };

  res.json(data);
  res.end();
};

// response untuk nested matakuliah
exports.oknested = function (values, res) {
  // lakukan akumuluasi
  const hasil = values.reduce((akumulasikan, item) => {
    // tentukan key group
    if (akumulasikan[item.nama]) {
      // buat var group nama mahasiswa
      const group = akumulasikan[item.nama];
      // cek jika isi array matakuliah
      if (Array.isArray(group.mata_kuliah)) {
        // tambahkan value ke dalam group matakuliah
        group.mata_kuliah.push(item.mata_kuliah);
      } else {
        group.mata_kuliah = [group.mata_kuliah, item.mata_kuliah];
      }
    } else {
      akumulasikan[item.nama] = item;
    }
    return akumulasikan;
  }, {});
  var data = {
    status: 200,
    values: hasil,
    message: 'OK',
  };

  res.json(data);
  res.end()
};
