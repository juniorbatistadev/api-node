var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:  {
        type:String,
        required: true
    },
    token:{
        type: String
    },
    genero:{
        type:String,
        required: true,
    },

    profile_pic:{
        type: String,
        required: true
    }
    
  });

userSchema.plugin(uniqueValidator);
var User = mongoose.model('User', userSchema);


module.exports = User;