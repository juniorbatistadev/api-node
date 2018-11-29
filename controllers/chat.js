var MensajeChat = require('../model/MensajeChat');

//funcion para crear enviar mensaje
function enviar(req, res, next){
    console.log('ENVIAR');
}

//funcion para ver todos los mensajes
function mensajesChat(req, res, next){
    console.log('menajes');
}

module.exports ={
    enviar : enviar,
    mensajesChat: mensajesChat
   
}