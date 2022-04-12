var mongoose = require('mongoose');
var schema = mongoose.schema;

var userschema = new schema({
  name: "Vandana",
  email: "vandana123annusah@gamil.com",
  age: 23,
  
})

var userschema = new schema({
  name:{ type: String, lowercase:true}
})