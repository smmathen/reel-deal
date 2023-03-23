import Logo from '../components/Logo'
import StartButton from '../components/StartButton'
export default function Selection() {
    return (
        <div className="Home" style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
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
                    Start </StartButton>
            </div>
        </div>
    )
}