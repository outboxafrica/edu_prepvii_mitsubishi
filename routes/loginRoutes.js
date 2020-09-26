const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/loginModels');

router.post('/', async(req, res) => {

const {emailExist} = await User.findOne({email: req.body.email});
if(emailExist) return res.status(400).send('Email already exists');

//Hash password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password, salt);

//Create a new user
    const user = new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
    });
    try {
        //Getting the user and saving
         const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
   
});




module.exports = router;

