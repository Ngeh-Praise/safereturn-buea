const express = require('express');
const router = express.Router();
const { getPendingCases, approveCase } = require('../controllers/adminController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

// Only Admins can access these
router.get('/pending', protect, restrictTo('admin'), getPendingCases);
router.patch('/approve/:id', protect, restrictTo('admin'), approveCase);

module.exports = router;