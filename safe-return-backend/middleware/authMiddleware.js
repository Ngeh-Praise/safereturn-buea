const jwt = require('jsonwebtoken');

// 1. Protect: Ensures the user is logged in
const protect = (req, res, next) => {
    // Get the token from the Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token) {
        console.log("DEBUG: No token provided in header");
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the token using the secret from your .env
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attaches user info (id, role) to the request
        next();
    } catch (err) {
        // This log will tell us exactly why the token is failing (expired, invalid signature, etc.)
        console.log("DEBUG: Token validation failed -", err.message);
        return res.status(403).json({ message: 'Token is not valid' });
    }
};

// 2. RestrictTo: Ensures the user has a specific role
const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            console.log("DEBUG: Permission denied for role:", req.user?.role);
            return res.status(403).json({ message: 'You do not have permission to perform this action' });
        }
        next();
    };
};

module.exports = { protect, restrictTo };