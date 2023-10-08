import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../Assets/logo.png";
import Open from "../Assets/burger.png";
import Close from "../Assets/cross.png";

function Navbar() {
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(false);
  const [showMenu, setShowMenu] = useState({ display: "none" });
  const [menuList, setMenuList] = useState(false);

  const HandleOpenMenu = () => {
    setOpen(false);
    setClose(true);
    setShowMenu({ display: "block" });
    setMenuList(true);
  };

  const HandleCloseMenu = () => {
    setClose(false);
    setOpen(true);
    setShowMenu({ display: "none" });
    setMenuList(false);
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-bar">
            <Link>
              <img src={Logo} alt="logo" />
            </Link>

            <menu>
              <div className="hamburger-menu">
                {open ? (
                  <img src={Open} alt="open menu" onClick={HandleOpenMenu} />
                ) : (
                  <img src={Close} alt="close menu" onClick={HandleCloseMenu} />
                )}
              </div>
              <ul style={showMenu}>
                <li onClick={HandleCloseMenu}>
                  <HashLink smooth to={"/#about"}>
                    About
                  </HashLink>
                </li>
                <li onClick={HandleCloseMenu}>
                  <HashLink smooth to={"/#project"}>
                    Project
                  </HashLink>
                </li>
                <li onClick={HandleCloseMenu}>
                  <HashLink>Resume</HashLink>
                </li>
              </ul>
            </menu>
          </div>
        </div>
      </nav>

      <div className="main-nav">
        <div className="container">
          <div className="main-nav-bar">
            <Link>
              <img src={Logo} alt="logo" />
            </Link>

            <div className="main-menu">
              <ul>
                <li>
                  <HashLink>About</HashLink>
                </li>
                <li>
                  <HashLink>Project</HashLink>
                </li>
                <li>
                  <HashLink>Resume</HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
