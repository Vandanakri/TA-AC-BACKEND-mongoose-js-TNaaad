var mongoose = require('mongoose');
var schema = mongoose.schema;

var userschema = new schema({
  name: String,
  email: {type: String, lowercase:true},
  age: {type:Number,default: 0},
  
})

