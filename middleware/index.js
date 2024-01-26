var express = require('express');
var auth = require('./auth');
const verifikasi = require('./verifikasi');
var router = express.Router();

// daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

// Alamat yang perlu auth
router.get('/api/v1/rahasia', verifikasi(), auth.halamanRahasia);

module.exports = router;
