import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <div className="footer">
        <p>&copy; {currentYear} Bede Ogbonna</p>
        <p className="let-connect">
          <Link to="https://github.com/udex91" target="_blank">
            <FaGithub />
          </Link>{" "}
          <Link to="https://twitter.com/Eudes1091" target="_blank">
            <FaSquareXTwitter />
          </Link>{" "}
          <Link to="https://www.facebook.com/profile.php?id=100074308023124&mibextid=ZbWKwL" target="_blank">
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

        
        </p>
      </div>
    </div>
  );
}

export default Footer;
