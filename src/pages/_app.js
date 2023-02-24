import Advertisement from "@/components/Advertisement";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Advertisement />
      <Component {...pageProps} />
    </>
  );
}
