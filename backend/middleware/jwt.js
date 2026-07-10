const jwt = require('jsonwebtoken'); 
 const seckey = '891f4b81e11662ea6e3785cd13d59efa9aa4cb306c0010c744fa456942b6355ac12441e9026544f0b45e562edd6b7c325f702b66d03b7b653b1b9c30f2dfa7e2';  
 
 const verifyToken = (req, res, next) => { 
     const token = req.headers.authorization?.split(' ')[1]; 
 
     if (!token) { 
          return res.status(401).json({ message: 'Unauthorized. Token missing.' }); 
      } 
      try { 
         const decoded = jwt.verify(token, seckey); 
          req.user = decoded;  
          next();  
      } catch (error) { 
          return res.status(401).json({ message: 'Unauthorized. Invalid token.' }); 
     } 
 }; 
 
 module.exports = verifyToken;