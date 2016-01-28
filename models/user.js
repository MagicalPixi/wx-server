/**
 * Created by guoshencheng on 1/29/16.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  access_token: String,
  openId: String,
  refresh_token: String,
  nickname: String,
  headimgurl: String,
  monster: {
    rank: Number
  }
});

var User = mongoose.model('User',userSchema)
module.exports = User