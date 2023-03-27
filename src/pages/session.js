import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Ticket from '../components/Ticket'

const inter = Inter({ subsets: ['latin'] })

export default function Session() {
  return (
    <div style = {{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", backgroundColor: "white"}}> 
        <Ticket />
        <p style = {{position: "absolute", top: "12vh", fontSize: "5vh"}}>
            Session Code:
        </p>
        <p style = {{position: "absolute", top: "18vh", fontSize: "5vh"}}>
            JF2!D
        </p>
        <p style = {{fontSize: "5vh"}}>
            Movie Watchers:
        </p>
        <ul style = {{fontSize: "4vh"}}>
            <li> Sean</li>
            <li> Shawn</li>
            <li> Shaun</li>
            <li> Shawne</li>
        </ul>
    </div>
  )
}