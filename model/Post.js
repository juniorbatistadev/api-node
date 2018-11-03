var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var postSchema = new mongoose.Schema({
    username: {
        type:String
    },
    content:  {
        type:String,
        required: true
    },
    comments:{
        type:Array,
    }
    
  });

postSchema.plugin(uniqueValidator);
var Post = mongoose.model('Post', postSchema);


module.exports = Post;