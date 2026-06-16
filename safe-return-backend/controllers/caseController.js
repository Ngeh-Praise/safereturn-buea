const db = require('../config/db');

exports.createCase = async (req, res) => {
    if (!req.user || !req.user.id) {
        return res.status(401).json({ message: 'User not authenticated' });
    }

    const { full_name, age, gender, description, last_seen_location_id, missing_date } = req.body;
    const reporter_id = req.user.id;
    const photo_url = req.file ? req.file.filename : null;

    // MOVE LOGS OUTSIDE THE DB CALL
    console.log("DEBUG: Location ID Value:", last_seen_location_id);

    try {
        await db.execute(
            `INSERT INTO MissingPersons 
            (reporter_id, full_name, age, gender, photo_url, description, last_seen_location_id, missing_date, status, approved) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', FALSE)`,
            [reporter_id, full_name, age, gender, photo_url, description, last_seen_location_id, missing_date]
        );

        res.status(201).json({ message: 'Report submitted successfully.' });
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
exports.approveCase = async (req, res) => {
    const caseId = req.params.id;
    console.log("DEBUG: Attempting to approve case ID:", caseId);

    try {
        // 1. Update the database
        const [updateResult] = await db.execute(
            'UPDATE MissingPersons SET approved = TRUE WHERE id = ?', 
            [caseId]
        );
        
        if (updateResult.affectedRows === 0) {
            return res.status(404).json({ message: "Case not found" });
        }

        // 2. Fetch case details
        const [rows] = await db.execute('SELECT full_name FROM MissingPersons WHERE id = ?', [caseId]);
        const person = rows[0];

        // 3. Fetch users
        const [users] = await db.execute('SELECT phone FROM Users');

        // 4. Log the broadcast
        console.log(`DEBUG: Successfully approved ${person.full_name}. Broadcasting to ${users.length} users.`);
        
        users.forEach(user => {
            console.log(`SMS SENT to ${user.phone}: URGENT! ${person.full_name} is missing.`);
        });

        return res.json({ message: 'Approved and alert broadcasted.' });
    } catch (err) {
        console.error("CRITICAL BACKEND ERROR:", err);
        return res.status(500).json({ error: err.message });
    }
};
// In caseController.js
exports.markAsFound = async (req, res) => {
    try {
        const caseId = req.params.id;
        await db.execute('UPDATE MissingPersons SET status = "found" WHERE id = ?', [caseId]);

        const [rows] = await db.execute('SELECT full_name FROM MissingPersons WHERE id = ?', [caseId]);
        const person = rows[0];

        const [users] = await db.execute('SELECT phone FROM Users');

        users.forEach(user => {
            console.log(`SMS SENT to ${user.phone}: Update! ${person.full_name} has been found. Thank you for your help.`);
        });

        res.json({ message: 'Case marked as found and closure SMS sent.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};