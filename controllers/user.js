var User = require('../model/User');
const bcrypt = require('bcrypt');

// declara varible de repuesta
var response = {}


function login(req, res){
    //verificar contrasena
     User.findOne({username:req.body.username}, function(err, user){
    //chekear si hay errore
        if(err) {
           response.error = true;
           responde.message = err;
        }else{
            if(bcrypt.compareSync(req.body.password, user.password )){
                //crear token para login
                user.token =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                user.save((err,save) => {
                    if(err){
                        response.error = true;
                        response.message = err;
                    }else{
                        user.set({password:null});
                        //formart respuesta al cliente
                        response.message = "User Logged",
                        response.login = true,
                        response.user = user 
                    }
                });
            }else{
                response.message = "Credenciales incorrectos",
                response.login = false;
                response.error = true; 
            }

        }
    });
    res.type('json'); 
    
    if(response.error){
        res.status(400).send(response);
    }else{
        res.status(200).send(response);
    }

    response = {};
}



function signUp(req, res){
    //hash contrasena
    var hash = (req.body.password) ? bcrypt.hashSync(req.body.password, 10): null;

    // crear model del usuario
    var newUser = new User ({
        username: req.body.username,
        password: hash,
        genero: req.body.genero,
        email: req.body.email,
        profile_pic: 'default.png'
    });

    //Intentar guardar en la base de datos si hay error enviar error sino crear respuesta
    newUser.save(function(err, newUser){
        if(err) {
                response.message = err,
                response.error = true,
                response.registrado = false

        }else{
          
            response.message= "Usuario Registrado",
            response.registrado = true
            
        }
        res.type('json'); 
    
        //enviar repuesta
        if (response.error){
            res.status(400).send(response);
        }else{
            res.status(200).send(response);
        }
        
    })
    
    
   ;

}



module.exports ={
    login : login,
    signUp: signUp
}