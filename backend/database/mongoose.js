const mongoose = require('mongoose');

// connection string - mongo db atlas
const URI = "mongodb+srv://zebsoft:KO1yATRwKBt4sJ1y@zebsoft.iyoy4go.mongodb.net/rkgit";

mongoose.connect(URI).then(() => {
    console.log('database connected!');
}).catch((err) => console.log(err));