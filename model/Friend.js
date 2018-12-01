var mongoose = require('mongoose');
var friends = require("mongoose-friends")


const FriendRequestSchema = new Schema({

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

    status: { // 0 = solicitud enviada, 1 = solicitud aceptada, 2 = solicitud denegada, 3 = amigos
        type: int,
        required: true 
    }
    });


var FriendRequestSchema = module.exports = mongoose.model('Friend', FriendRequestSchema);