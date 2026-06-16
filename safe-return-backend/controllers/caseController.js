const db = require('../config/db');

exports.createCase = async (req, res) => {
    const { full_name, age, gender, description, last_seen_location_id, missing_date } = req.body;
    const reporter_id = req.user.id;
    const photo_url = req.file ? req.file.filename : null; // Get filename from multer

    try {
        await db.execute(
            `INSERT INTO MissingPersons 
            (reporter_id, full_name, age, gender, photo, description, last_seen_location_id, missing_date, status, approved) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', FALSE)`,
            [reporter_id, full_name, age, gender, photo_url, description, last_seen_location_id, missing_date]
        );

        res.status(201).json({ message: 'Report submitted with image successfully.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};