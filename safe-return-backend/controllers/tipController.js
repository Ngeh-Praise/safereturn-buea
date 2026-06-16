const db = require('../config/db');

exports.submitTip = async (req, res) => {
    // 1. Destructure only the fields that exist in your database
    const { case_id, description, location } = req.body;
    const user_id = req.user.id;
    const image_url = req.file ? req.file.filename : null; 

    try {
        // 2. Insert only the columns that exist in your current table
        await db.execute(
            `INSERT INTO Tips (case_id, user_id, description, image_url, location) 
             VALUES (?, ?, ?, ?, ?)`,
            [case_id, user_id, description, image_url, location]
        );

        res.status(201).json({ 
            message: 'Tip submitted successfully.', 
            image: image_url 
        });
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};