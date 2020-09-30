const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String,
             required:true},
    password: {
        type: String,
        required: true,
        set: (value) => {
          return bcrypt.hashSync(value, 10);
        },
      },
});

module.exports = mongoose.model('User', userSchema);