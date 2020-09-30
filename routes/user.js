const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post('/signup',async(req, res, next) =>{
    try {
        let user = new User(req.body)
        const result = await user.save()
        res.send({message: "user created"})
       } catch(err) {
        next(err)
     }
 });
module.exports = router;