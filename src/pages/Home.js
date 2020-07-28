import React from "react";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <>
      <div className="home">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <span className="font">
            <FaArrowAltCircleDown />
          </span>
        </Link>
      </div>

      <About />
      <Service />
      <Footer />
    </>
  );
}
