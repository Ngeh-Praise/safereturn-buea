const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db'); 
const authRoutes = require('./routes/authRoutes');
const caseRoutes = require('./routes/caseRoutes');
const tipRoutes = require('./routes/tipRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

// 1. Initialize 'app' FIRST
const app = express();
app.use(cors());

// 2. Use middleware and routes SECOND
app.use(express.json()); 
app.use('/api/tips', tipRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cases', caseRoutes);
app.use('/api/notifications', notificationRoutes);
// 3. Start server LAST
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});