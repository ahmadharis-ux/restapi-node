'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, req){
    response.ok("Aplikasi Res Api berjalan");
};