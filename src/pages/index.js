import { Inter } from 'next/font/google'
import Logo from '../components/Logo'
import StartButton from '../components/Button'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className="Home" style={{ backgroundColor: "white", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
            {/*Logo */}
            <Logo />
            {/* Start Button */}
            <div style={{ marginTop: "15em" }}>
                <StartButton
                    border="none"
                    color="#FFDE59"
                    height="100px"
                    onClick={() => console.log("Testing our button!")}
                    radius="10%"
                    width="400px"
                >
                    <Link href="/start"> Start </Link>
                </StartButton>
            </div>
        </div>
    )
}