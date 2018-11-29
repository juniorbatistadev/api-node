var User = require('../model/User');
const bcrypt = require('bcrypt');


function login(req, res){

    User.find({username:req.body.username})
    .exec()
    .then(user => {
        if(user.length > 0 && bcrypt.compareSync(req.body.password, user[0].password )){
                //crear token para login
                        user[0].token =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                        user[0].save((err,save) => {
                            if(err){
                                throw "Error en Login"
                            }else{
                                user[0].set({password:null});
                                //formart respuesta al cliente
                                res.status(200).json({
                                    user: user[0]
                                })
                            }
                        });
        }else{
            throw "Contrasena incorrecta"
        }
    }

    ).catch(err => {
        res.status(404).json({
            error : 'error: '+ err
        });
    })
}

function getUserByUsername(req, res){
    User.find({username: req.params.username})
    .exec()
    .then((user)=>{
        if(user.length > 0){
            res.json(user);
        }else{
            res.json({
                error: 'Usario noencontrado'
            })
        }
    })
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
            res.status(404).json({
                err: 'Usuario no registrado'+err
            })
        }else{
          
           res.status(200).json({
               message: 'Usuario registrado'
           })
            
        }

    })
    
    
   

}



module.exports ={
    login : login,
    signUp: signUp,
    getUserByUsername: getUserByUsername
}