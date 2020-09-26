const express = require('express');
const server = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');



dotenv.config();
const port = process.env.PORT || 3500;

//Connect to the db
mongoose.connect(process.env.DATABASE,
{ useNewUrlParser: true, useUnifiedTopology: true },
 () => console.log('connected to db!')
 );

//Middleware
server.use(express.json());
  //Import Routes
  const loginroutes = require('./routes/loginRoutes');
server.use('/login',loginroutes);


server.listen(port,()=>{
    console.log("Listening on port");
});
