const express = require('express');
const roomsData = require('./schema/roomSchema');
const app = express();
const port = 3500;
require('./database/mongoose');
const cors = require('cors');
const appRoute = require('./routes/routes');
const cookieParser = require('cookie-parser');


// middleware - pipeline - req / res pass

app.use(express.json());
app.use(cors());
app.use(appRoute);
app.use(cookieParser());

app.listen(port, () => {
    console.log('server is running on port no 3500..');
});