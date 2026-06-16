const express = require('express');
const router = express.Router();
const { submitTip } = require('../controllers/tipController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// User must be logged in to submit a tip
router.post('/', protect, upload.single('image'), submitTip);

module.exports = router;