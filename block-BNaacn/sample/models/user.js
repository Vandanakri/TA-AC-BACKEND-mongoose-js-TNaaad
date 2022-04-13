var schema = mongoose.schema;

var userSchema = new schema({
  name:String,
  email: { type:String,lowercase:true,default:0},
  age: Number,
  password: { type: String, minlength:5},
  createAt: { type: Date, default: new Date()},
  village:String,
  city:{ type:String, required:true },
  state:{ type:String, required:true },
  pin:Number,
  favourites: [String],
},{timestamps:true})

module.exports = mongoose.model('User',userSchema);




