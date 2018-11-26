var Post = require('../model/Post');
var Comment = require('../model/Comment');


//funcion para crear un nuevo post
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

//funcion para conseguir todos los posts
function getPosts(req, res, next){
    Post.find({}, function(err, posts){
        if(err){
            res.status(404).json({
                error: 'error'
            })
        }else{
            res.status(200).json({
                posts: posts
            })
        }
    })
}

//publicar comentarios a un posts
function commentPost(req,res,next){
   Post.findOne({_id:req.params.postId})
   .exec()
   .then(post =>{
        const comment = new Comment({
            content: req.body.content,
            username: req.userData.username,
            post:req.params.postId
        });

        comment.save();

        post.comments.push(comment._id);
        post.save()

        res.status(200).json({
            message: 'Publicado'
        })

   }).catch((err) =>{
        res.status(404).json({
            error: 'error'+err
        })
   })
   

   
   
}

//conseguir comentarios del post

function getComments(req, res){
    Post.findOne({_id:req.params.postId})
    .populate('comments')
   .exec((err,post)=>{
       if(err){
            res.status(404).json({
                error: 'error'+err
            })
       }else{
            res.status(200).json({
                Comments: post.comments
            })
       }
   })
}





module.exports ={
    create : create,
    getPosts: getPosts,
    commentPost: commentPost,
    getComments:getComments
}