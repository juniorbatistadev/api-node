var User = require('../model/User');

module.exports = (req, res, next) => {
    try{
    User.find({token:req.body.token})
    .exec()
    .then( user =>  {

        if(user.length < 1){
            res.status(404).json({
                error: "Auth failed"+err
            });
        }else{
            req.userData = user[0];
            next();
        }
        
    }
    ).catch(err => {
        res.status(404).json({
            error: "Auth failed: "+err
        });
    })
    
}
    catch(err){
        res.status(404).json({
            error: "Auth failed"+err
        });
    }
}