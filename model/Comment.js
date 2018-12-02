var mongoose = require("./../db")

var commentSchema = new mongoose.Schema({
    post_id: {
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
    },
    photo: {
        type: [{type: Schema.Type.ObjectId, ref: 'Photo'}]
        }
    
  })

var Comment = mongoose.model('Comment', commentSchema);


module.exports = Comment;