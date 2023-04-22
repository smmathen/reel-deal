import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Join() {
    const [sessionId, setSessionId] = useState('');
    const router = useRouter();
    const storedName = typeof window !== 'undefined' ? window.sessionStorage.getItem('name') : null;


    const joinSession = async () => {
        window.sessionStorage.setItem('sessionId', sessionId);

        const response = await fetch('/api/joinSession', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sessionId: parseInt(sessionId),
                storedName,
            }),
        });

        if (response.ok) {
            router.push('/joinSession');
        } else {
            console.error('Failed to join session');
        }
    };

    const handleSessionIdChange = (event) => {
        setSessionId(event.target.value);
        window.sessionStorage.setItem('sessionId', sessionId);
    };

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                backgroundColor: 'white',
            }}
        >
            <Head>
                <title>Join Session</title>
            </Head>
            <h1
                style={{
                    marginTop: '10vh',
                    marginBottom: '5vh',
                    fontSize: '10vh',
                }}
            >
                Join Session
            </h1>
            <div style={{ marginBottom: '20vh' }}>
                <form>
                    <input
                        type="text"
                        name="sessionId"
                        size="30"
                        placeholder="Enter Code"
                        style={{
                            height: '8vh',
                            width: '50vh',
                            textAlign: 'center',
                            fontSize: '4vh',
                        }}
                        value={sessionId}
                        onChange={handleSessionIdChange}
                    />
                </form>
            </div>
            <div style={{ position: 'absolute', bottom: '5vh' }}>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input
                        type="button"
                        onClick={joinSession}
                        value="Join"
                        style={{
                            fontSize: '4vh',
                            color: '#fb0605',
                            backgroundColor: '#f9c84f',
                            width: '40vh',
                            height: '10vh',
                            borderRadius: '30px',
                        }}
                    />
                </form>
            </div>
        </div>
    );
}
