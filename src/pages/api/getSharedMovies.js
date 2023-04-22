import { getAllLikedMovies } from '../../../session';


export default async function handler(req, res) {
    const { sessionId } = req.body;
    try {
        const likedMovies = await getAllLikedMovies(sessionId);
        res.status(200).json({ message: 'Movie List Found Successfully', likedMovies });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}