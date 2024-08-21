// const { Router } = require("express");
// const User = require("../models/User.js");

const User = require("../models/user");
const bcrypt=require("bcrypt");

// const User = require("../models/User.js");


const authcontroller={
  createUser: async (req, res)=>{
    try {
      const {username, password, email}=req.body;
      const hashedPassword=await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      const newUser=await User.create({username, email, password: hashedPassword});
      res.status(201).json({message:"user created successfully!", user: newUser});
    } catch (err) {
      res.status(400).json({message:'Error creating user!!!', error: err.message});
    }
  },

  // loginUser
  loginUser: async (req, res)=>{
    try {
      const {email, password}=req.body;
      const userData=await User.findOne({where: {email}});
      if(!userData) return res.status(400).json({message:'Invalid email or password!!!'});
      try {
        const isValidPassword=await bcrypt.compare(password, userData.password);
        console.log(isValidPassword);
        if(!isValidPassword) return res.status(400).json({message:'incorrect password!! try again'})
        return res.status(200).json({message:'login successful!!', user:userData});
      } catch (err) {
        res.status(400).json({message:'something is wrong with bcrypt!!!', error: err.message})
      }
    } catch (err) {
      
    }
  }
}

module.exports=authcontroller;