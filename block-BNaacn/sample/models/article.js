var mongoose = require('mongoose')
var Schema = mongoose.schema;

var articleSchema = new schema({
  title:String,
  description:String,
  tags: [String],
  createAt: { type: Date, default: new Date()},
  likes: { type:Number, default: 0}
})
module.exports = mongoose.model('Article',articleSchema);
