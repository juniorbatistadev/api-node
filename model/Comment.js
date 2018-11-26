var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var commentSchema = new mongoose.Schema({
    post: {
        type:String,
        required : true
    },
    content:  {
        type:String,
        required: true
    },
    username:{
        type:String,
        required:true
    }
    
  });

commentSchema.plugin(uniqueValidator);
var Comment = mongoose.model('Comment', commentSchema);


module.exports = Comment;