var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: { type: Number, required: true },
    description: String,
    tags: [String],
    likes: { type: String, default: 0 },
    aurtor: Schema.Types.ObjectId,
    Comments: Schema.Types.ObjectId,
}, { timestamps: true });

var Article = mongoose.model( "Article", articleSchema );
module.exports = Article;