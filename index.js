const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');


//Middlewares---------------------------------------
app.use(cors());
app.use(bodyParser.json());

//main route----------------------------------------
app.get('/', (req,res)=>{
    res.status(200).send('Welcome to home page');
});

//exported routes-----------------------------------
const usersRoute = require('./routes/users');
app.use('/users',usersRoute);

//listening & port server---------------------------
app.listen(process.env.SERVER_PORT,()=>{
   console.log('Server running on port: ' + process.env.SERVER_PORT);
});