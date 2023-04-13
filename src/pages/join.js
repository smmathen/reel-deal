import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Join() {
  return (
    <div style = {{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", backgroundColor: "white"}}> 
        <h1 style = {{marginTop: "10vh", marginBottom: "5vh", fontSize: "10vh"}}> Join Session </h1>
        <div style = {{marginBottom: "20vh"}}>
            <form>
                <input type = "text" name = "Name" size = "30" placeholder = "Enter Code" 
                    style = {{height: "8vh", width: "50vh", textAlign: "center", fontSize: "4vh"}}>
                </input>
            </form>
        </div>
        <div style = {{position: "absolute", bottom: "5vh"}}>
            <form style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <input type = "button" onClick = "alert('join clicked')" value = "Join" 
                    style = {{fontSize: "4vh", color: "#fb0605", backgroundColor: "#f9c84f", width: "40vh", height: "10vh", borderRadius: "30px"}}>
                </input>
            </form> 
        </div>    
    </div>
  )
}