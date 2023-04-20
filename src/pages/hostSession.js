import { Inter } from 'next/font/google'
import Ticket from '../components/Ticket'
import { useEffect, useState } from 'react'
// const { addSession } = require("../../session")

const inter = Inter({ subsets: ['latin'] })

export default function Session() {

    const sessionId = window.sessionStorage.getItem('sessionId');

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
                    <li style={{ color: "black" }}> Sean</li>
                    <li style={{ color: "black" }}> Shawn</li>
                    <li style={{ color: "black" }}> Shaun</li>
                    <li style={{ color: "black" }}> Shawne</li>
                </ul>
            </div>
        </div>
    )
}
