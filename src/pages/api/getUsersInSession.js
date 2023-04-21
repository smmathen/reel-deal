const { getUsersInSession } = require('../../../session');

export default async function handler(req, res) {
    console.log("getUsersInSession api call running")
    // console.log("storedName: ", storedName)
    const { sessionId, storedName } = req.body;
    console.log("req.body: ", req.body)
    
    try {
        console.log("sessionId: ", sessionId)
        const usersList = await getUsersInSession(sessionId);
        res.status(200).json({ users: usersList });
        console.log("users in session", usersList)
        console.log("sent response")
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}