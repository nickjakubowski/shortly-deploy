// var mongoose = require('mongoose');
// var mongolabURI = 'mongodb://MongoLab-v:fANoxM62VOmw8MzEw96yKcgDCtVzzmZ3rC5zOYSMR04-@ds052408.mongolab.com:52408/MongoLab-v'
// var url = process.env.mongolabURI || 'mongodb://localhost/27017';
// mongoose.connect(url);

var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
 
/* 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 */
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
 
/*
 * Mongoose uses a different connection string format than MongoDB's standard.
 * Use the mongodb-uri library to help you convert from the standard format to
 * Mongoose's format.
 */
var mongodbUri = 'mongodb://MongoLab-v:fANoxM62VOmw8MzEw96yKcgDCtVzzmZ3rC5zOYSMR04-@ds052408.mongolab.com:52408/MongoLab-v' || 'mongodb://localhost/27017';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
mongoose.connect(mongooseUri, options);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connection made!');
});

module.exports = mongoose;

