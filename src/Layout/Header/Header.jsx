import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  useEffect(() => {
    if (headerToggle) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [headerToggle]);

  return (
    <div className="container header-cont">
      <header>
        <div className="left-header">
          <img src="/logo.svg" alt="" />
          <nav className={headerToggle ? "open-header" : ""}>
            <Link
              onClick={() => setHeaderToggle(false)}
              to="hero"
              activeClass="active-link"
              className="nav-links"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={50}
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
              offset={50}
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
              <button className="inverse gradient-text">Buy MTG</button>
              <button className="cta-btn">
                Start Playing <img src="/arrow.svg" alt="" />
              </button>
            </div>
          </nav>
        </div>
        <div
          onClick={() => setHeaderToggle(false)}
          className={`overlay ${headerToggle ? "open-overlay" : ""}`}
        ></div>
        <FontAwesomeIcon
          onClick={() => setHeaderToggle((prev) => !prev)}
          icon={headerToggle ? faXmark : faBars}
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
