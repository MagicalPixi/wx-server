var mongoose = require('mongoose');
var db = 'mongodb://localhost:27017/wx_renyan';
mongoose.connect(db, {
  server: {poolSize: 20}
}, function(err) {
  //console.log(err.message);
  //console.error('connect to %s error:', db, err.message);
  //process.exit(1);
});

var Token = require('./token')
var User = require('./user')
exports.Token = Token
exports.User = User