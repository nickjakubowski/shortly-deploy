var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connection made!');
});

module.exports = mongoose;
