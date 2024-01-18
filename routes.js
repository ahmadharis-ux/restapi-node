'user strict';

module.exports = function (app) {
  var jsonku = require('./controller');

  app.route('/').get(jsonku.index);
  app.route('/alldata').get(jsonku.getAllUser);
  app.route('/data/:id').get(jsonku.userById);
  app.route('/tambah').post(jsonku.storeData);
  app.route('/update/:id').post(jsonku.updateData);
  app.route('/delete').delete(jsonku.deleteData);
  app.route('/nested').get(jsonku.tampilGroup);
};
