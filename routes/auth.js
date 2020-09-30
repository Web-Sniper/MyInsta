const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {JSON_SECRATE} = require("../keys")
const requireLogin = require("../middleware/requireLogin")

//Protected Resource
router.get("/protected",requireLogin,(req,res)=>{
    res.send("Hello")
})

router.get("/home", (req,res)=>{
    res.send("Hello")
})

//signup
router.post("/signup",(req,res)=>{
    var {name,email,password} = req.body
    if(!name||!email||!password){
        return res.status(422).json({error : "Fill all the fields.."})
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return res.status(422).json({error : "Invalid Email"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exist..."})
        }
        bcrypt.hash(password,12,(err,hash)=>{
            password = hash
            const user = new User({
                name,
                email,
                password
            })
            user.save()
            .then(user=>{
                res.json({message:"User saved...."})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    }).catch(err=>{
        console.log(err)
    })
})

//signin
router.post("/login",(req,res)=>{
    const {email,password} = req.body
    if(!email||!password){
        return res.status(422).json({error : "All fields are mandatory..."})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error : "Invalid user or password..."})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id},JSON_SECRATE)
                const user = {_id:savedUser._id,name:savedUser.name,email:savedUser.email}
                res.json({token,user})
            }
            else{
                return res.status(422).json({error : "Invalid user or password..."})
            }
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router