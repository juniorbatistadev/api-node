var mongoose = require('mongoose');

const FriendRequestSchema = new mongoose.Schema({

    requester: { //quien envia la solicitud
        type: int,
        required: true,
        ref: 'User'
    },

    receiver: { //quien recibe la solicitud
        type: int,
        required: true,
        ref: 'User'
    },

    status: { // 0 = añadir, 1 = solicitud enviada, 2 = solicitud pendiente, 3 = amigos
        type: int,
        required: true 
    }
    });


var FriendRequestSchema = module.exports = mongoose.model('Friend', FriendRequestSchema);