const express = require('express');
const userData = require('./schema/userSchema');
const app = express();
const port = 3500;
require('./database/mongoose');


// middleware - pipeline - req / res pass

app.use(express.json());

// api endpoint - 1. URL   2. Controller function

app.post('/register', async (req, res) => {
    try{
        console.log(req.body);
        await userData.create(req.body);
        res.send('user registration successful!');
    }catch(err){
        console.log(err);
        res.send(err.message);
    };
});

app.listen(port, () => {
    console.log('server is running on port no 3500..');
});