const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Post = mongoose.model("Post")
const requireLogin = require("../middleware/requireLogin")

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,content,photo} = req.body
    if(!title||!content||!photo){
        return res.status(422).json({error:"Please add all the field"})
    }
    req.user.password = undefined
    const post = new Post({
        title,
        content,
        photo,
        postedBy:req.user
    })
    post.save()
    .then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        return res.json({error:err})
    })
})

router.get('/allpost',requireLogin,(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mypost',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user})
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.put('/like',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        useFindAndModify: false,
        new : true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            return res.json(result)
        }
    })

})

router.put('/unlike',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new : true,
        useFindAndModify: false
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            return res.json(result)
        }
    })

})


module.exports = router