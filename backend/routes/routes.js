const express = require('express');
const { addroom, getroom, deleteroom, roomsbyid, updateroom } = require('../controller/roomsController');
const { adduser, userlogin, addmobileuser } = require('../controller/userController');
const appRoute = express.Router();
const verifyToken = require('../middleware/jwt');
const upload = require('../middleware/upload');

appRoute.post('/add-room', upload.single('image'), addroom);
appRoute.get('/get-room', getroom);
appRoute.delete('/delete-room/:id', deleteroom);
appRoute.get('/roombyid/:id', roomsbyid);
appRoute.put('/update-room/:id', updateroom);

appRoute.post('/add-user', adduser);
appRoute.post('/login-user', userlogin);
appRoute.post('/add-mobile-user', addmobileuser);

module.exports = appRoute;