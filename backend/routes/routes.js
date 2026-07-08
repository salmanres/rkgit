const express = require('express');
const { addroom, getroom } = require('../controller/roomsController');
const appRoute = express.Router();

appRoute.post('/add-room', addroom);
appRoute.get('/get-room', getroom);

// app.post('/add-room', async (req, res)=>{
//     try{
//         await roomsData.create(req.body);
//         res.send('room data added successfully');
//     }catch(err){
//         res.send('internal server error');
//     };
// });

module.exports = appRoute;