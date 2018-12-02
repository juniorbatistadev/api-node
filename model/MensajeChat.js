var mongoose = require('./../db');
var MensajeChatSchema = new mongoose.Schema({
    content:  {
        type:String,
        required: true
    },
    username:{
        type:String,
        required:true
    }
    
  });

var MensajeChat = mongoose.model('MensajeChat', MensajeChatSchema);


module.exports = MensajeChat;