import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../Assets/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="nav-bar">
          <Link>
            <img src={Logo} alt="logo" />
          </Link>
          <menu>
            <ul>
              <li>
                <HashLink smooth to={"/#about"}>
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={"/#project"}>
                  Project
                </HashLink>
              </li>
              <li>
                <HashLink>Resume</HashLink>
              </li>
            </ul>
          </menu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
