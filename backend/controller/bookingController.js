const bookingdata = require("../schema/bookingSchema");

const createBooking = async (req, res) => {
    try {
        const newBooking = await bookingdata.create(req.body);
        
        // Emit socket notification to all connected admins/users
        // here we are emitting an event
        if (req.io) {
            req.io.emit('newBookingNotification', {
                message: `New booking received from ${newBooking.name}!`,
                booking: newBooking
            });
        }
        res.send('booking successful!');
    } catch (e) {
        console.log(e);
        res.send('internal server error');
    }
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
};

const allbookings = async (req, res) => {
    try{
        const data = await bookingdata.find();
        res.send(data);
    }catch(err){
        console.log(err);
        res.send('internal server error');
    };
};

module.exports = {createBooking, bookingbymobile, allbookings};