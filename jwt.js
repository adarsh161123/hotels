const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized access - No token provided' });
    }

    const token =req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized access - No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized access - Invalid token' });
    }   
}

const generateToken = (userdata) => {
   
    return jwt.sign(userdata, process.env.JWT_SECRET);
}


module.exports = {
    jwtAuthMiddleware,
    generateToken
};

