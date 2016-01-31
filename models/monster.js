/**
 * Created by guoshencheng on 1/31/16.
 */

var mongoose = require('mongoose');
var monserSchema = mongoose.Schema({
  property1: Number,
  property2: Number,
  property3: Number,
  property4: Number,
  property5: Number,
  ownerid: Number,
  type: String
});

var Monster = mongoose.model('Monster',monserSchema)
module.exports = Monster