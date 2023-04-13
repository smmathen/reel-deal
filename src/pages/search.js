import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Join() {
  return (
    <div style={{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", backgroundColor: "white"}}>
      <div style={{marginTop: "5vh"}}>
        <form>
          <input type="text" name="Name" size="30" placeholder="Search | 🔍" style={{height: "8vh", width: "50vh", textAlign: "center", fontSize: "4vh", borderRadius: "50px"}} />
        </form>
      </div>
      <div style={{display: "flex", marginTop: "2vh"}}>
        <div style={{marginRight: "1vh"}}>
          <input type="text" placeholder="Action" style={{height: "5vh", width: "10vh", fontSize: "2.5vh", padding: "0.5vh", borderRadius: "50px"}} />
        </div>m
        <div style={{marginRight: "1vh"}}>
          <input type="text" placeholder="Adventure" style={{height: "5vh", width: "14vh", fontSize: "2.5vh", padding: "0.5vh", borderRadius: "50px"}} />
        </div>
        <div style={{marginRight: "1vh"}}>
          <input type="text" placeholder="Comedy" style={{height: "5vh", width: "11vh", fontSize: "2.5vh", padding: "0.5vh", borderRadius: "50px"}} />
        </div>
        <div style={{marginRight: "1vh"}}>
          <input type="text" placeholder="Documentary" style={{height: "5vh", width: "17vh", fontSize: "2.5vh", padding: "0.5vh", borderRadius: "50px"}} />
        </div>
        <div style={{marginRight: "1vh"}}>
          <input type="text" placeholder="Drama" style={{height: "5vh", width: "10vh", fontSize: "2.5vh", padding: "0.5vh", borderRadius: "50px"}} />
        </div>
        <div>
          <input type="text" placeholder="Thriller" style={{height: "5vh", width: "10vh", fontSize: "2.5vh", padding: "0.5vh", borderRadius: "50px"}} />
        </div>
      </div>
      <div style={{position: "absolute", bottom: "5vh"}}>
        <form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <input type="button" onClick={() => alert('join clicked')} value="Host" style={{fontSize: "4vh", color: "#fb0605", backgroundColor: "#f9c84f", width: "40vh", height: "10vh", borderRadius: "30px"}} />
        </form>
      </div>
    </div>
  );
}