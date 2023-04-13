import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from "../components/Poster";
import Bar from "../components/Bar"
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Join() {
  return (
    <div className="Home" style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ marginTop: "10vh", display: "flex", justifyContent: "center" }}>
        <Image src="/image1.jpg" width={200} height={200} style={{ marginRight: "2rem" }} />
        <Image src="/image2.jpg" width={200} height={200} style={{ marginRight: "2rem" }} />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src="/poster1.jpg" width={200} height={200} style={{ marginRight: "2rem" }} />
        <Image src="/poster2.jpg" width={200} height={200} />
      </div>
      <div style={{marginBottom: "2vh"}}></div>
      <Bar />
    </div>
  );
}
