const express = require("express");
const router=express.Router()
const authcontroller=require("../controllers/authcontroller.js")

router.post('/register', authcontroller.createUser);
router.post('/login', authcontroller.loginUser);

module.exports= router