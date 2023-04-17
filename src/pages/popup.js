import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from "../components/Poster";
import Bar from "../components/Bar"
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
//changes
export default function Join() {
  return (
    <div className="Home" style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Logo/>
        <h1 style={{position: "absolute", top: "60vh", left: "50%", transform: "translate(-50%, -50%)"}}>A Match Made Reel!</h1>

      <div style={{marginTop: "20vh"}}>
        <button style={{fontSize: "2.5vh", color: "black", backgroundColor: "grey", width: "40vh", height: "8vh", borderRadius: "30px"}}>Continue Swiping</button>
      </div>
      <div style={{marginTop: "2vh"}}>
        <button style={{fontSize: "2.5vh", color: "white", backgroundColor: "red", width: "40vh", height: "8vh", borderRadius: "30px"}}>End Session</button>
      </div>
      <div style={{marginBottom: "2vh"}}></div>
      <Bar/>
    </div>
  );
}