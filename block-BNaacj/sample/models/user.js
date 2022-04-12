var mongoose = require('mongoose');
var schema = mongoose.schema;

var userschema = new schema({
  password: { type: String, min:5,max:15},
  createAt: date

},{timestamps:true})



