const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    // 1. Get the token from the header
    const token = req.headers.authorization?.split(' ')[1]; // Format: "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // 2. Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Adds user info (id, role) to the request object
        next(); // Move to the next function
    } catch (err) {
        res.status(403).json({ message: 'Token is not valid' });
    }
};

module.exports = { protect };

const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'You do not have permission to perform this action' });
        }
        next();
    };
};
module.exports = { protect, restrictTo };