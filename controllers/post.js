var Post = require('../model/Post');



function create(req, res, next){

    var newPost = new Post({
        username: req.userData.username,
        content: req.body.content
    });

    newPost.save((err,newPost) => {
        if(err){
            console.log(err);
        }else{
            res.json({
                message: "Post Creado"
            })
        }
    })
    
}


function getPosts(req, res, next){
    Post.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.json({
                message: posts
            })
        }
    })
}






module.exports ={
    create : create,
    getPosts: getPosts
}