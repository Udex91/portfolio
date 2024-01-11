import { useState } from "react";
import Connect from "./Connect";
import {
  FaFacebook,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSass,
  FaWhatsapp,
} from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Hero() {
  const [active, setActive] = useState(false);

  // sets the button true on click
  const letConnect = () => {
    setActive(true);
  };

  // sets the button false on click
  const letDisconnect = () => {
    setActive(false);
  };

  return (
    <div className="container">
      <div className="hero">
        <p className="hero-intro">Hi,</p>
        <h1 className="hero-title">
          I'm <span>Bede Ogbonna</span>
        </h1>
        <div>
          <h3 className="hero-desc">
            Front-end Developer <span>&</span> Social Media Manager
          </h3>
          <p className="tools">
            <FaReact /> <FaSass /> <FaNodeJs /> 
          </p>
        </div>
        <div className="connect-btn">
          <Connect onClick={letConnect} />
          {active ? (
            <p className="let-connect">
              <Link to="https://twitter.com/Eudes1091" target="_blank">
                <FaSquareXTwitter />
              </Link>{" "}
              <Link
                to="https://www.facebook.com/profile.php?id=100074308023124&mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebook />
              </Link>{" "}
              <Link
                to="https://www.linkedin.com/in/bede-ogbonna/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>{" "}
              <Link to="https://wa.me/+2348132586920" target="_blank">
                <FaWhatsapp />
              </Link>{" "}
              <span onClick={letDisconnect}>X</span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Hero;
