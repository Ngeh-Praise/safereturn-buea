const express = require('express');
const router = express.Router();
const { createCase } = require('../controllers/caseController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// This route is now protected; only logged-in users can access it
router.post('/', protect, upload.single('photo'),  createCase);

module.exports = router;