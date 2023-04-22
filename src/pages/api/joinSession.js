const { joinExistingSession } = require('../../../session');

export default async function handler(req, res) {
    console.log("api call running")
    const { sessionId, storedName } = req.body;

    try {
        joinExistingSession(sessionId, storedName)
        res.status(200).json({ message: 'Session joined successfully' });
        console.log("sent")
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}