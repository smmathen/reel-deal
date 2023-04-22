const { addLikedMovie } = require('../../../session');

export default async function handler(req, res) {
    // console.log("storedName: ", storedName)
    const { sessionId, storedName, index } = req.body;

    try {
        let agreedOn = addLikedMovie(sessionId, index);
        res.status(200).json({ message: 'Movie Added Successfully', agreedOn });
        alert("AGREED ON IN ADDLIKEDMOVIE.JS: ", agreedOn)

    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }

}