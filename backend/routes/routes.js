const express = require('express');
const { addroom, getroom, deleteroom, roomsbyid, updateroom } = require('../controller/roomsController');
const { adduser, userlogin } = require('../controller/userController');
const appRoute = express.Router();
const verifyToken = require('../middleware/jwt');

appRoute.post('/add-room', addroom);
appRoute.get('/get-room', verifyToken, getroom);
appRoute.delete('/delete-room/:id', deleteroom);
appRoute.get('/roombyid/:id', roomsbyid);
appRoute.put('/update-room/:id', updateroom);

appRoute.post('/add-user', adduser);
appRoute.post('/login-user', userlogin);

module.exports = appRoute;