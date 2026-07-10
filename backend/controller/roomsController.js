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
    }catch(err){
        console.log(err);
        res.send('internal server error');
    };
};

const deleteroom = async (req, res) => {
    try{
        console.log(req.params);
        await roomsData.findByIdAndDelete({_id : req.params.id});
        res.send('room information deleted!');
    }catch(err){
        console.log(err);
        res.send('internal server error');
    }
}

const roomsbyid = async (req, res)=>{
    try{
        console.log(req.params.id);
        const data = await roomsData.findOne({_id : req.params.id});
        console.log(data);
        res.send(data);
    }catch(err){
        console.log(err);
        res.send('internal server error');
    }
};

const updateroom = async (req, res) => {
    try{
        const id = req.params.id;
        const data = req.body;

        const response = await roomsData.findByIdAndUpdate(id, data);
        console.log(response);
        res.send('rooms data updated');

    }catch(err){
        console.log(err);
        res.send('internal server error');
    }
}

module.exports = {addroom, getroom, deleteroom, roomsbyid, updateroom};