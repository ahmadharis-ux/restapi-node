const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verifikasi() {
  return function (req, rest, next) {
    var role = req.body.role;
    // cek token di header
    var tokenWithBaerer = req.headers.authorization;
    if (tokenWithBaerer) {
      var token = tokenWithBaerer.split(' ')[1];
      // Verifikasi
      jwt.verify(token, config.secret, function (error, decoded) {
        if (error) {
          return rest.status(401).send({
            auth: false,
            message: 'TOken tidak terdaftar',
          });
        } else {
          if (role == 2) {
            req.auth = decoded;
            next();
          } else {
            return rest.status(401).send({
              auth: false,
              message: 'Not roles',
            });
          }
        }
      });
    } else {
      return rest.status(401).send({
        auth: false,
        message: 'TOken tidak tesedia',
      });
    }
  };
}
module.exports = verifikasi;
