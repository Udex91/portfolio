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
import { SiMongodb, SiPostman } from "react-icons/si";
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
          I am <span>Chukwu Godgive</span>
        </h1>
        <div>
          <h3 className="hero-desc">
            Software Engineer <span>&</span> IT Specialist
          </h3>
          <p className="tools">
            <FaReact /> <FaSass /> <FaNodeJs /> <SiMongodb /> <SiPostman />
          </p>
        </div>
        <div className="connect-btn">
          <Connect onClick={letConnect} />
          {active ? (
            <p className="let-connect">
              <Link to="https://twitter.com/givestarzy" target="_blank">
                <FaSquareXTwitter />
              </Link>{" "}
              <Link
                to="https://www.facebook.com/chukwu.godgive/"
                target="_blank"
              >
                <FaFacebook />
              </Link>{" "}
              <Link
                to="https://www.linkedin.com/in/chukwu-godgive/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>{" "}
              <Link to="https://wa.me/+2348130709131" target="_blank">
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
