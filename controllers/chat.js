var MensajeChat = require('../model/MensajeChat');

//funcion para crear enviar mensaje
function enviar(req, res, next){
    console.log('ENVIAR');
    let sendMessage =async (req, res)=>{
    
    let chat = req.params.chat;
    let content = req.params.username;
    let message = new mensajesChat({
        username, content
    }) 

    res.send(message);
    
}

//funcion para ver todos los mensajes
function mensajesChat(req, res, next){
    console.log('menajes');
    
    let mensajesChat= async(req, res)=>{
        let chat =  await mensajesChat.find();
        res.send(chat);
     }
}

module.exports ={
    enviar : enviar,
    mensajesChat: mensajesChat
   
}
