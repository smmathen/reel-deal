import { Inter } from 'next/font/google'
import Ticket from '../components/Ticket'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Session() {
    const [sessionId, setSessionId] = useState('')
    const [users, setUsers] = useState([]);
    const [started, setStarted] = useState(false);


    useEffect(() => {
        const fetchUsers = () => {
            fetch('/api/getUsersInSession', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sessionId
                }),
            })
                .then(response => response.json())
                .then(data => {

                    // Set the state with the users data
                    // setUsers(data[0]?.users ?? []);
                    setUsers(data.users);
                })
                .catch(error => {
                    console.error(error);
                });
        };

        // Call the fetchUsers function every 5 seconds
        const intervalId = setInterval(fetchUsers, 3500);

        return () => {
            clearInterval(intervalId);
        }
    }, [sessionId]);

    useEffect(() => {
        const sessionId = window.sessionStorage.getItem('sessionId');
        if (sessionId) {
            setSessionId(sessionId);
        }
    }, [])

    const handleStartClick = () => {
        // Set the started state to true
        setStarted(true);
    }

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", backgroundColor: "white" }}>
            <div style={{ position: "relative", top: "10%", fontSize: "300%" }}>
                <Ticket />
                <div>
                    <p style={{ position: "absolute", top: "25%", fontSize: "100%", left: "20%" }}>
                        Session Code:
                    </p>
                    <p style={{ position: "absolute", top: "45%", fontSize: "100%", left: "35%" }}>
                        {sessionId}
                    </p>
                </div>
            </div>
            <div style={{ position: "relative", top: "10%" }}>
                <p style={{ fontSize: "5vh", color: "black" }}>
                    Movie Watchers:
                </p>
                <ul style={{ fontSize: "4vh" }}>
                    {users.map((user) => (
                        <li key={user}>{user}</li>
                    ))}
                </ul>
                {started ? null : <button onClick={handleStartClick} style={{ marginTop: '2rem' }}>Start</button>}
            </div>
        </div>
    )
}
