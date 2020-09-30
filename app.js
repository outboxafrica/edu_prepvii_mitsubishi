const express = require('express');
const app = express();  
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
app.get('/', (req, res) => {
     res.send({ message: 'Hello from server'});
});
app.use("/user", userRoutes);
mongoose.connect('mongodb://localhost/firstdb',{ useNewUrlParser: true,useUnifiedTopology: true });
const PORT = 3001
app.listen(PORT, () => {
   console.log(`app running at ${PORT}`)
});