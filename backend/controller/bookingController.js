const bookingdata = require("../schema/bookingSchema");

const createBooking = async (req, res) => {
    try{
        await bookingdata.create(req.body);
        res.send('booking successful!');
    }catch(e){
        console.log(e);
        res.send('internal server error');
    };
};

const bookingbymobile = async (req, res) => {
    try{
        console.log(req.params);
        const data = await bookingdata.find({mobile:req.params.mobile});
        res.send(data);
    }catch(e){
        console.log(e);
        res.send('internal server error');
    }
}

module.exports = {createBooking, bookingbymobile};