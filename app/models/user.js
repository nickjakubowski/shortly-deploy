var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connection made!');
});

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  links: [{
     timeStamp: Date,
     base_url: String,
     title: String,
     code: String,
     visits: Number 
  }]
  
})

var User = mongoose.model('User', userSchema);

module.exports = User;
