const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

router.post('/post/save',(req,res)=>{
    let newPost = new Posts(req.body);
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved succesfully"
        });
});
router.get('/posts',(req,res) =>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({

            });

        }
        return res.status(200).json({
            success:true,
            existingPoints:posts
        });
    });
});

router.put('./post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $ser:req.body
        },
        (err,post) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(400).json({
                success:"updated Succesfully"
            });
        }
    );
});

router.delete('/post/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
    });
});
router.get("/post/:id",(req,res) =>{
    let postId = req.params.is;
    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

module.export= router;
