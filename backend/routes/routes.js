const express = require('express');
const { addroom, getroom, deleteroom, roomsbyid, updateroom } = require('../controller/roomsController');
const { adduser, userlogin, addmobileuser } = require('../controller/userController');
const appRoute = express.Router();
const verifyToken = require('../middleware/jwt');
const upload = require('../middleware/upload');
const { createBooking, bookingbymobile, allbookings } = require('../controller/bookingController');
// Import note controller functions
const { createNote, getNotes, deleteNote } = require('../controller/noteController');

appRoute.post('/add-room', upload.single('image'), addroom);
appRoute.get('/get-room', getroom);
appRoute.delete('/delete-room/:id', deleteroom);
appRoute.get('/roombyid/:id', roomsbyid);
appRoute.put('/update-room/:id', updateroom);

appRoute.post('/add-user', adduser);
appRoute.post('/login-user', userlogin);
appRoute.post('/add-mobile-user', addmobileuser);

appRoute.post('/create-booking', createBooking);
appRoute.get('/booking-by-mobile/:mobile', bookingbymobile);

appRoute.get('/all-bookings', allbookings);

// Note endpoints
appRoute.post('/add-note', createNote);
appRoute.get('/get-notes', getNotes);
appRoute.delete('/delete-note/:id', deleteNote);

module.exports = appRoute;