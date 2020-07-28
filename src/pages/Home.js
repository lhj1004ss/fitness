import React from "react";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="home"></div>
      <About />
      <Service />
      <Footer />
    </div>
  );
}
