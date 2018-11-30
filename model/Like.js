var mongoose = require('mongoose');

var LikeSchema = new mongoose.Schema({
    likeBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
});

module.exports = mongoose.model("Like", LikeSchema);
