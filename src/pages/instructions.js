import Head from 'next/head';
import Logo from "../components/Logo";
import Bar from "../components/Bar";

export default function Instructions() {
  return (
    <div>
      <Head>
        <title>Instructions | The reelDeal</title>
      </Head>
      <main>
        <center>
        <Logo />
            <br></br>
        <h1>Here's the instruction on how to use ReelDeal</h1>
        <br></br>
        <p>1. Swipe right or click the hear button if you like the movie and left or the x button if you don't.</p>
        <p>2. Click on the movie poster to get details on the movie and click anywhere on the details page to go back to the swiping screen.</p>
        <p>3. After the process that been completed, a popup screen with the list of the movies that the users have liked will be available.</p>
        <p>4. Enjoy the movie on your device or continue swipping for more!</p>
        </center>
        <Bar />
      </main>
    </div>
  );
}