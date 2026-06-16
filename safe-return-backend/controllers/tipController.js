const db = require('../config/db');

exports.submitTip = async (req, res) => {
    const { case_id, description, location, contact_info } = req.body;
    const user_id = req.user.id;
    // This grabs the filename from the multer middleware
    const image_url = req.file ? req.file.filename : null; 

    try {
        await db.execute(
            `INSERT INTO Tips (case_id, user_id, description, image_url, location, contact_info) 
             VALUES (?, ?, ?, ?, ?, ?)`,
            [case_id, user_id, description, image_url, location, contact_info]
        );

        res.status(201).json({ 
            message: 'Tip submitted successfully.', 
            image: image_url // Returning this helps the frontend confirm the upload
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};