var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({

    username: {
        type:String,
        required: true

    },
    content:  {
        type:String,
        required: true
    },

    comments:{
        type:[{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    },

    likes:{
         type:[{type: Schema.Types.ObjectId, ref:'Like'}]
     },

  });

postSchema.plugin(uniqueValidator);
var Post = mongoose.model('Post', postSchema);


module.exports = Post;