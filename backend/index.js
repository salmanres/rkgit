const express = require('express');
const roomsData = require('./schema/roomSchema');
const app = express();
const port = 3500;

// Import http and Socket.io
const http = require('http');
const { Server } = require('socket.io');

require('./database/mongoose');
const cors = require('cors');
const appRoute = require('./routes/routes');
const cookieParser = require('cookie-parser');

// Create the HTTP server wrapping our Express app
const server = http.createServer(app);

// Initialize socket.io with CORS configuration
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

// Setup socket connection listener
io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

// Middleware to attach the io instance to all requests
app.use((req, res, next) => {
    req.io = io;
    next();
});

// Middlewares - pipeline
app.use(express.json());
app.use('/uploads', express.static('uploads')); // statically exposed
app.use(cors());
app.use(appRoute);
app.use(cookieParser());

// Listen on the HTTP server instead of the Express app
server.listen(port, () => {
    console.log('server is running on port no 3500..');
});