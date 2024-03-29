import { Inter } from 'next/font/google'
import Ticket from '../components/Ticket'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '../components/Button';

const inter = Inter({ subsets: ['latin'] })

export default function Session() {
    const sessionId = typeof window !== 'undefined' ? window.sessionStorage.getItem('sessionId') : null;

    const [users, setUsers] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // Make a GET request to retrieve the session data
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
    }, [sessionId]);

    const handleStart = () => {
        router.push('/swipe');
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
                <p style={{ fontSize: "5vh" }}>
                    Movie Watchers:
                </p>
                <ul style={{ fontSize: "4vh" }}>
                    {users.map((user) => (
                        <li key={user}>{user}</li>
                    ))}
                </ul>
                {/* <button onClick={handleStart}>Start</button> */}
                <Button
                    border="none"
                    color="#FFDE59"
                    height="100px"
                    onClick={handleStart}
                    radius="10%"
                    width="400px"
                >
                    <a> Start </a>
                </Button>
            </div>
        </div>
    )
}
