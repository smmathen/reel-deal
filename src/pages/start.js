import { Inter } from 'next/font/google'
import Button from '../components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Start() {
    return (
        <div style = {{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", backgroundColor: "white"}}> 
            <h1 style = {{marginTop: "10vh", marginBottom: "5vh", fontSize: "10vh"}}> Session Start: </h1>
            <div style = {{marginBottom: "20vh"}}>
                <form>
                    <input type = "text" name = "UserName" size = "30" placeholder = "Enter your name" 
                        style = {{height: "8vh", width: "50vh", textAlign: "center", fontSize: "4vh"}}>
                    </input>
                </form>
            </div>
            <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Button
                    border="none"
                    color="#FFDE59"
                    height="100px"
                    onClick={() => console.log("Testing our button!")}
                    radius="10%"
                    width="400px"
                >
                    <a href="http://localhost:3000/hostSession"> Host Session </a>
                </Button>
                <br/>
                <Button
                    border="none"
                    color="#FFDE59"
                    height="100px"
                    onClick={() => console.log("Testing our button!")}
                    radius="10%"
                    width="400px"
                >
                    <a href="http://localhost:3000/join"> Join Session </a>
                </Button>
            </div>
        </div>     
    )
}