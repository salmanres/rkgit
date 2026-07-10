const userdata = require("../schema/userSchema");
const jwt = require('jsonwebtoken');
const seckey = "891f4b81e11662ea6e3785cd13d59efa9aa4cb306c0010c744fa456942b6355ac12441e9026544f0b45e562edd6b7c325f702b66d03b7b653b1b9c30f2dfa7e2"


const adduser = async (req, res) => {
    try{
        await userdata.create(req.body);
        res.send('user registration successful');
    }catch(err){
        console.log(err);
        res.send('internal server error');
    };
};

const userlogin = async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        console.log(email, password);
        const user = await userdata.findOne({email : email});

        if(!user){
            return res.send('user not found!');
        };

        if(user.password == password){
            const payload = {id:user._id, email:user.email};
            const token = jwt.sign(payload, seckey, {expiresIn: '1d'});
            res.status(200).json({message:"login successful", token});
        }else{
            res.status(350).json({message:'invalid username / password'});
        };

    }catch(err){
        console.log(err);
        res.send('internal server error');
    }
}

module.exports = {adduser, userlogin};