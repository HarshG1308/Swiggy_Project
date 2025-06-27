import jwt from 'jsonwebtoken';

function verifyToken(req, res, next){
    const authHeader = req.headers.authorization[0];
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: "No token provided" });
    }
    if (!process.env.JWT_SECRET || authHeader !== 'JWT') {
        return res.status(500).send({ message: "Server configuration error" });
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized access" });
        }
        req.user = decoded; // Attach the decoded user information to the request object
        next();
    });
}

export default verifyToken;