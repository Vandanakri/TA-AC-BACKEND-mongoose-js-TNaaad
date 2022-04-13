var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var addresschema = new schema({
  village:String,
  city:{ type:String, required:true },
  state:{ type:String, required:true },
  pin:Number,
  user: Schema.Type.objectID
},{timestamps:true})

var Address = mongoose.model('Address',addressSchema);

module.exports = Address;