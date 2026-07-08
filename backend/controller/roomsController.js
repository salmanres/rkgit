const roomsData = require("../schema/roomSchema");

const addroom = async (req, res)=>{
    try{
        await roomsData.create(req.body);
        res.send('room data added successfully');
    }catch(err){
        console.log(err);
        res.send('internal server error');
    };
};

const getroom = async (req, res) => {
    try{
        const response = await roomsData.find();
        res.send(response);
        console.log(response);
    }catch(err){
        console.log(err);
        res.send('internal server error');
    };
};

module.exports = {addroom, getroom};