const mongoose = require('mongoose')
const Carrer = mongoose.Schema({
    username: {
        type: String,
    
    },

    email: {
        type: String,
       
    },
    password: {
        type: String,
      
    } 
});
  
module.exports = mongoose.model('User', Carrer);