/**
 * Created by guoshencheng on 1/29/16.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  openid: String,
  token: {
    access_token: String,
    expires_in: Number,
    refresh_token: String,
    openid: String,
    scope: String,
    create_at: Number
  },
  nickname: String,
  sex: String,
  headimgurl: String,
});

var User = mongoose.model('User',userSchema)
module.exports = User