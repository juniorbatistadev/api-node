var MensajeChat = require('../model/MensajeChat');

//funcion para crear enviar mensaje
function enviar(req, res, next){

    let newMessage = new MensajeChat({
        username: req.userData.username,
        content: req.body.content
    }) 

    newMessage.save((err, newMessage) => {
        if (err){
            res.status(404).json({
                error: 'Mensaje no enviado'+ err
            })
        }else{
            res.status(200).json({
                message : 'Mensaje enviado'
            })
        }
    })

    
}

//funcion para ver todos los mensajes
function mensajesChat(req, res, next){
    MensajeChat.find({}, function(err, mensajes){
        if(err){
            res.status(404).json({
                error: 'error'
            })
        }else{
            res.status(200).json({
                mensajes: mensajes
            })
        }
    })
    
}

module.exports ={
    enviar : enviar,
    mensajesChat: mensajesChat
   
}
