const multer = require('multer');  // middleware - hadle form data
const path = require('path'); 
 
// 1. Configure Storage (Destination & Filename) 
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'uploads/'); // store uploaded files in the 'uploads' folder 
    }, 
    filename: (req, file, cb) => { 
        // Generates a unique filename: image-171829381.jpg 
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
    } 
}); 
 
// 2. Validate File Type (only allow images) 
const fileFilter = (req, file, cb) => { 
    const allowedTypes = /jpeg|jpg|png|gif|webp/; 
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase()); 
    const mimetype = allowedTypes.test(file.mimetype); 
 
    if (extname && mimetype) { 
        return cb(null, true); 
    } else { 
        cb(new Error('Only images are allowed!'), false); 
    } 
}; 
 
// 3. Initialize Multer 
const upload = multer({ 
    storage: storage, 
    limits: { fileSize: 5 * 1024 * 1024 }, // limits file size to 5MB  
    fileFilter: fileFilter 
}); 
 
module.exports = upload; 