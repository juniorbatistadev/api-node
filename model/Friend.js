var mongoose = require('mongoose');


const sentRequestSchema = new mongoose.Schema({
    username: {
        type: String, 
        default: ''}
}),

const requestSchema = new mongoose.Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
        },

        username: {
            type: String, 
            default: ''
        }
}),

const friendsListSchema = new mongoose.Schema ({
    friendId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
        },
        
        friendName: {
            type: String, 
            default: '' 
        }
}),

var sentRq  = mongoose.model('sentRq', sentRequestSchema);
module.exports = sentRq;

module.exports = mongoose.model ('request', requestSchema)

module.exports = mongoose.model('friendList', friendsListSchema);
