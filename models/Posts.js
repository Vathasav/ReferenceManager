var mongoose = require('mongoose');

// create a schema for adding 
//new posts

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
	source: String,
	user: String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

//function to upvote a post
PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

//registering the post in mongoose model
mongoose.model('Post', PostSchema);
