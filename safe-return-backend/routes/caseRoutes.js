const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Ensure DB is imported here for the pending route
const { 
    createCase, 
    approveCase, 
    markAsFound 
} = require('../controllers/caseController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// 1. Report a Case
router.post('/', protect, upload.single('photo'), createCase);

// 2. Fetch Pending Cases for Admin
router.get('/pending', protect, async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM MissingPersons WHERE approved = FALSE');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// 3. Approve a Case (FIXED: pointed to approveCase)
router.patch('/:id/approve', protect, approveCase);

// 4. Mark a Case as Found
router.patch('/:id/found', protect, markAsFound);

module.exports = router;