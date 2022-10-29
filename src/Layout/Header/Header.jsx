import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);

  return (
    <div className="container header-cont">
      <header>
        <div className="left-header">
          <img src="/logo.svg" alt="" className="desktop-btn" />
          <nav className={headerToggle ? "open-header" : ""}>
            <img src="/fabric.png" alt="" className="fabric" />
            <div className="menu-top mobile-btn">
              <img src="/logo.svg" alt="" />
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setHeaderToggle(false)}
              />
            </div>
            <Link
              onClick={() => setHeaderToggle(false)}
              to="hero"
              activeClass="active-link"
              className="nav-links"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Overview
            </Link>
            <Link
              onClick={() => setHeaderToggle(false)}
              to="token"
              className="nav-links"
              activeClass="active-link"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Token economics
            </Link>
            <Link
              onClick={() => setHeaderToggle(false)}
              to="works"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="nav-links"
              activeClass="active-link"
            >
              Features
            </Link>
            <Link
              onClick={() => setHeaderToggle(false)}
              to="faq"
              spy={true}
              offset={50}
              duration={500}
              smooth={true}
              className="nav-links"
              activeClass="active-link"
            >
              F.A.Q
            </Link>
            <div className="btn-div mobile-btn">
              <button className="cta-btn">
                <img src="/playing.png" alt="" /> Start Playing
              </button>
              <button className="inverse gradient-text">Buy MTG</button>
            </div>
          </nav>
        </div>
        <div
          onClick={() => setHeaderToggle(false)}
          className={`overlay ${headerToggle ? "open-overlay" : ""}`}
        ></div>
        <img
          src="/menu.png"
          onClick={() => {
            setHeaderToggle(true);
          }}
          alt=""
          className="header-toggle"
        />
        <div className="btn-div desktop-btn">
          <button className="inverse gradient-text">Buy MTG</button>
          <button className="cta-btn">
            Start Playing <img src="/arrow.svg" alt="" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
