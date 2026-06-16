const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER: Only allows 'community' role registration
exports.register = async (req, res) => {
    const { full_name, email, phone_number, password } = req.body;

    try {
        // 1. Check if user already exists
        const [existingUser] = await db.execute('SELECT id FROM Users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // 2. Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. Insert into database (Role is HARDCODED to 'community')
        await db.execute(
            'INSERT INTO Users (full_name, email, phone_number, password, role) VALUES (?, ?, ?, ?, ?)',
            [full_name, email, phone_number, hashedPassword, 'community']
        );

        res.status(201).json({ message: 'User registered successfully as community member' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// LOGIN: Authenticates user and returns JWT with role
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Find user by email
        const [users] = await db.execute('SELECT * FROM Users WHERE email = ?', [email]);
        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = users[0];

        // 2. Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // 3. Generate JWT (Including role in the payload)
        const token = jwt.sign(
            { id: user.id, role: user.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: '7d' }
        );

        // 4. Send response
        res.json({ 
            token, 
            user: { 
                id: user.id, 
                full_name: user.full_name, 
                role: user.role 
            } 
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};