var schema = mongoose.schema;

var articleSchema = new schema({
  title:String,
  description:String,
  tags: [String],
  createAt: { type: Date, default: new Date()},
  likes: { type:Number, default: 0}
})
var Article = mongoose.model('Article',articleSchema);

module.exports = Article;