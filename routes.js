'user strict';

module.exports = function (app) {
  var jsonku = require('./controller');

  app.route('/').get(jsonku.index);
  app.route('/alldata').get(jsonku.getAllUser);
  app.route('/data/:id').get(jsonku.userById);
};
