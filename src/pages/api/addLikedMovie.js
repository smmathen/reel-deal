import { addLikedMovie } from '../../../session';

export default async function handler(req, res) {
    const { sessionId, index } = req.body;

    try {
        const agreedOn = await addLikedMovie(sessionId, index);
        res.status(200).json({ message: 'Movie Added Successfully', agreedOn });
        console.log("AGREED ON IN ADDLIKEDMOVIE.JS: ", agreedOn)

    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}
