import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <div className="footer">
        <p>{currentYear} &copy; Chukwu Godgive</p>
        <p className="let-connect">
          <Link to="https://github.com/chukwu-godgive" target="_blank">
            <FaGithub />
          </Link>{" "}
          <Link to="https://twitter.com/givestarzy" target="_blank">
            <FaSquareXTwitter />
          </Link>{" "}
          <Link to="https://www.facebook.com/chukwu.godgive/" target="_blank">
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
        </p>
      </div>
    </div>
  );
}

export default Footer;
