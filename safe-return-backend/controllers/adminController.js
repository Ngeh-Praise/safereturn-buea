const db = require('../config/db');
const { sendSMS } = require('../services/smsService');

// Get all cases awaiting approval
exports.getPendingCases = async (req, res) => {
    const [cases] = await db.execute('SELECT * FROM MissingPersons WHERE approved = FALSE');
    res.json(cases);
};

// Approve a case
exports.approveCase = async (req, res) => {
    const { id } = req.params;

    // 1. Approve in DB
    await db.execute('UPDATE MissingPersons SET approved = TRUE WHERE id = ?', [id]);

    // 2. Fetch reporter/case details to send alert
    const [cases] = await db.execute('SELECT * FROM MissingPersons WHERE id = ?', [id]);
    const caseDetails = cases[0];

    // 3. Trigger SMS (We send to a mock phone number for now)
    const alertMessage = `ALERT: Missing person ${caseDetails.full_name} reported. Please check SafeReturn Buea.`;
    await sendSMS("670000000", alertMessage);

    res.json({ message: 'Case approved and SMS alert triggered' });
};