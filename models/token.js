/**
 * Created by guoshencheng on 1/29/16.
 */
var mongoose = require('mongoose');
var tokenSchema = mongoose.Schema({
  name: String,
  access_token: String
});

var Token = mongoose.model('Token',tokenSchema)
module.exports = Token