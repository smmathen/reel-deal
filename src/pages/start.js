import { useState } from 'react';
import { Inter } from 'next/font/google';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Start() {
    const [name, setName] = useState('');
    const router = useRouter();

    const handleHostSessionClick = (event) => {
        if (name === '') {
            alert('Please enter your name');
            event.preventDefault();
        } else {
            // create session id
            const sessionId = Math.floor(Math.random() * 90000) + 10000
            sessionStorage.setItem('sessionId', sessionId);

            // Set the user's name in sessionStorage
            sessionStorage.setItem('name', name);
            const storedName = window.sessionStorage.getItem('name');

            // Make a POST request to add the session
            fetch('/api/addSession', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                sessionId,
                storedName,
                }),
            });
            console.log("addSession called")

            // Redirect to /hostSession
            router.push('/hostSession');
        }
    };

    const handleJoinSessionClick = (event) => {
        if (name === '') {
            alert('Please enter your name');
            event.preventDefault();
        } else {
            // Set the user's name in sessionStorage
            sessionStorage.setItem('name', name);
            // Redirect to /join
            router.push('/join');
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'white' }}>
            <h1 style={{ marginTop: '10vh', marginBottom: '5vh', fontSize: '10vh' }}> Session Start: </h1>
            <div style={{ marginBottom: '20vh' }}>
                <form>
                    <input type="text" name="UserName" size="30" placeholder="Enter your name" value={name} onChange={handleNameChange}
                        style={{ height: '8vh', width: '50vh', textAlign: 'center', fontSize: '4vh' }}
                    />
                </form>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button
                    border="none"
                    color="#FFDE59"
                    height="100px"
                    onClick={handleHostSessionClick}
                    radius="10%"
                    width="400px"
                >
                    <a> Host Session </a>
                </Button>
                <br />
                <Button
                    border="none"
                    color="#FFDE59"
                    height="100px"
                    onClick={handleJoinSessionClick}
                    radius="10%"
                    width="400px"
                >
                    <a> Join Session </a>
                </Button>
            </div>
        </div>
    );
}
