const { default: mongoose } = require("mongoose");

var schema = mongoose.schema;

var userSchema = new schema({
  name:String,
  email: { type:String,lowercase:true},
  age: { type:Number,default:0},
  favourites: [String],
  marks:[Number],
  password: { type: String, minlength:5,maxlength:15},
  createAt: { type: Date, default: new Date()}
})

module.exports = mongoose.model('User',userSchema);

