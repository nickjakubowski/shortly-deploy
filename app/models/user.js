var mongoose = require('../config')
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  username: String,
  password: String
})

var User = mongoose.model('User', userSchema);

User.prototype.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
    callback(isMatch);
  });
};

module.exports = User;
