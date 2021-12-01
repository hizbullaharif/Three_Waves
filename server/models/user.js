const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose');
require('dotenv').config();
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1},
    name:{
        type:String,
        trim:true,
        require:true,
        maxlength:100},
    lastname:{
        type:String,
        trim:true,
        require:true,
        maxlength:100},
    password:{
        type:String,
        required:true,
        minlength:5},
    cart:{
        type:Array,
        default:[]},
    history:{
        type:Array,
        default:[]},
    role:{
        type:Number,
        default:0},
    token:{
        type:String}})

// password Encrytion
userSchema.pre('save',function(next){
    var user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10,function(err,salt){
            if(err) return next(err);
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password = hash;
                next();
            });
        })
    } else{
        next()
    }
})

// Password Comparison
userSchema.methods.comparePassword = function(candidatePassword,cb){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return cb(err);
        cb(null,isMatch)
    })
}

// Token generation
userSchema.methods.generateToken = function(cb){
    var user = this;
    var token =jwt.sign(user._id.toHexString(),process.env.SECRETPASS)
    user.token = token;
    user.save(function(err,user){
        if(err) return cb(err);
        cb(null,user);
    });
}

//findbyToken
userSchema.statics.findByToken= function(token,cb){
    var user = this;
    jwt.verify(token,process.env.SECRETPASS,function(err,decode){
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user);
        })
    })
}

const User = mongoose.model('User',userSchema)
module.exports = {User};