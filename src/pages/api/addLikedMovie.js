const { addLikedMovie } = require('../../../session');

export default async function handler(req, res) {
    // console.log("storedName: ", storedName)
    const { sessionId, storedName, index } = req.body;

    try {

        addLikedMovie(sessionId, index);
        res.status(200).json({ message: 'Session added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}