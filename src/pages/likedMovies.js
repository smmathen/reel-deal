import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Bar from "../components/Bar"

export default function LikedMovies() {
    const [movies, setMovies] = useState([])
    const [allMovies, setAllMovies] = useState([])
    const router = useRouter();

    useEffect(() => {
        const sessionId = sessionStorage.getItem('sessionId')

        const fetchLikedMovies = () => {
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
                    console.log('liked movies:', data.likedMovies)
                })
                .catch(error => {
                    console.error(error)
                })
        }

        // Fetch liked movies data immediately
        fetchLikedMovies()

        // Fetch liked movies data every 2 seconds
        const intervalId = setInterval(fetchLikedMovies, 2000)

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./movies.json')
            const data = await response.json()
            setAllMovies(data)
        }

        fetchData()
    }, [])

    const handleEndSession = () => {
        sessionStorage.removeItem('sessionId')
        router.push('/')
    }

    // const handleMovieReroll = () => {

    //     router.push('/swipe')
    // }


    return (
        <div className="container">
            <div className="white-background"></div>
            <h1 className="title">Movies Everyone Liked!</h1>
            <button className="end-session-button" onClick={handleEndSession}>
                End Session
            </button>

            {/* <button className="movie-reroll-button" onClick={handleMovieReroll}>
                Movie Reroll
            </button> */}
            <ul className="movies-list">
                {movies.map((movieId, index) => (
                    <li key={index} className="movie-item">
                        <img
                            src={allMovies[movieId].Image_Poster_Link}
                            alt={allMovies[movieId].Title}
                            className="movie-poster"
                        />
                        <div className="movie-info">
                            <span className="movie-number">{index + 1}</span>
                            <span className="movie-title">{allMovies[movieId].Title}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <style jsx>{`
            body {
              background-color: white;
            }
            .container {
                width: 51.9vw;
                max-width: 800px;
                margin: 0 auto;
            }

            .white-background {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 51.9vw;
                height: 100vh;
                background-color: white;
                z-index: -1;
            }

            .title {
                text-align: center;
                background-color: white;
                margin: 0;
            }

            .end-session-button {
                background-color: red;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 0.5rem 1rem;
                position: absolute;
                top: 1rem;
                right: 1rem;
            }
            .movies-list {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-wrap: wrap;
                background-color: white;
                width: 51.9vw;
            }

            .movie-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 1rem;
                margin-bottom: 1rem;
            }

            .movie-poster {
                width: 100px;
                height: 150px;
                object-fit: cover;
                margin-bottom: 0.5rem;
            }

            .movie-info {
                display: flex;
                align-items: center;
            }

            .movie-number {
                font-size: 1.2rem;
                font-weight: bold;
                margin-right: 0.5rem;
            }

            .movie-title {
                font-size: 1.2rem;
                text-align: center;
            }
          `}</style>
            <div style = {{position: "absolute", bottom: "0"}}>
                <Bar />
            </div>
        </div>
    );

}
