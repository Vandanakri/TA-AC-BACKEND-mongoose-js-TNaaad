var mongoose = require('mongoose');
var schema = mongoose.schema;

var userschema = new schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
}
,{timestamps:true})

var userschema = new schema({
  user: String
})



