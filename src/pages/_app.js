import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import "bootstrap/dist/css/bootstrap.css"

// ! import "bootstrap/dist/css/bootstrap.min.js"
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  // * firstly create DOM, then import bootstrap js
  useEffect(() => { import("bootstrap/dist/js/bootstrap.min.js") }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
