const express = require('express');
const userData = require('./schema/userSchema');
const roomsData = require('./schema/roomSchema');
const app = express();
const port = 3500;
require('./database/mongoose');
const cors = require('cors');
const appRoute = require('./routes/routes');


// middleware - pipeline - req / res pass

app.use(express.json());
app.use(cors());
app.use(appRoute);

app.listen(port, () => {
    console.log('server is running on port no 3500..');
});