import { useEffect, useState } from 'react'

export default function likedMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const sessionId = sessionStorage.getItem("sessionId");

        // Fetch liked movies data from the server with the sessionId in the body
        fetch('/api/getSharedMovies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId: sessionId })
        })
            .then(res => res.json())
            .then(data => {
                // Set the state with the liked movies data
                setMovies(data.likedMovies)
                console.log("liked movies:", data.likedMovies)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h1>Liked Movies</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    )
}
