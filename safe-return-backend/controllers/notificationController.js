const db = require('../config/db');

exports.getUserNotifications = async (req, res) => {
    const user_id = req.user.id;
    try {
        const [notifications] = await db.execute(
            'SELECT * FROM Notifications WHERE user_id = ? ORDER BY created_at DESC', 
            [user_id]
        );
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching notifications' });
    }
};