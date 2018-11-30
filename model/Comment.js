var mongoose = require('mongoose');

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

var Comment = mongoose.model('Comment', commentSchema);


module.exports = Comment;