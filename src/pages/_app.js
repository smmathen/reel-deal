import '@/styles/globals.css'
import { useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [sender, setSender] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/chat");
  };

  return (
    <Component
      handleLoginChange={(e) => setSender(e.target.value)}
      sender={sender}
      handleLogin={handleLogin}
      {...pageProps}
    />
  );
}
