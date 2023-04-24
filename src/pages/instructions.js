import Head from 'next/head';
import Logo from "../components/Logo";
import Bar from "../components/Bar";

export default function Instructions() {
    return (
        <div style = {{width: "75vw", marginBottom: "-2.3vh"}}>
            <div className="white-background" style = {{position: "absolute", left: "50%", transform: "translateX(-50%)", width: "75vw",
            height: "100vh", zIndex: "-1", backgroundColor: "white"}}></div>
            <Head>
                <title>Instructions | The reelDeal</title>
            </Head>
            <main style = {{backgroundColor: "white"}}>
                <center>
                <Logo />
                    <br></br>
                <h1>Here&apos;s the instruction on how to use ReelDeal</h1>
                <br></br>
                <p>1. Swipe right or click the hear button if you like the movie and left or the x button if you don&apos;t.</p>
                <p>2. Click on the movie poster to get details on the movie and click anywhere on the details page to go back to the swiping screen.</p>
                <p>3. After the process that been completed, a popup screen with the list of the movies that the users have liked will be available.</p>
                <p>4. Enjoy the movie on your device or continue swipping for more!</p>
                </center>
                <div style = {{position: "absolute", bottom: "0", width: "75vw"}}>
                    <Bar />
                </div>
            </main>
        </div>
    );
}