const { getUsersInSession } = require('../../../session');

export default async function handler(req, res) {
    // console.log("storedName: ", storedName)
    const { sessionId, storedName } = req.body;

    try {

        const usersList = await getUsersInSession(sessionId);
        res.status(200).json({ users: usersList });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}