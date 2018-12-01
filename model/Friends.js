var mongoose = require('mongoose');

var sentRequest = new mongoose.Schema({
    username: {
        type: String, 
        default: ''}
}),

var request = new mongoose.Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'},
        username: {type: String, 
        default: ''}
}),

var friendsList = new mongoose.Schema ({
    friendId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'},
        friendName: {type: String, 
        default: ''}
}),

var Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;
