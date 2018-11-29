const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;

//Conectando a mongo db

mongo.connect('mongodb://127.0.0.1/mainchat', {useNewUrlParser: true }, function (err, db) {
    if (err){
        throw err;
    }

    console.log("Me conecté...")

   //Conectando al Socket
   client.on('conexion', function(){
        let chat = db.collection('chats');

        //Funcion para enviar estatus
        sendStatus = function(s){
            socket.emit('estatus', s);
        }

        //Obtener lista de mensajes
        chat.find().limit(100).sort({_id:1}).toArray (function(err, res){
            if (err){
                throw err
            }

            //Enviar mensajes
            socket.emit('output', res);

            //Ingresar mensajes
            socket.on('input', function (data){
                let mensaje = data.mensaje;

                //Revisando que el mensaje no este vacio
                if(mensaje == ''){
                    sendStatus('Por favor escriba un mensaje')
                } else {
                    chat.insert({mensaje: mensaje}, function(){
                        client.emit ('output', [data]);

                        sendStatus({
                            mensaje: 'Mensaje enviado',
                            clear: true
                        });

                    });
                }
            });


        });
   }); 
});
