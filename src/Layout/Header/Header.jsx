import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
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
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="nav-links active-link"
            >
              Overview
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="nav-links"
            >
              Token economics
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="nav-links"
            >
              Features
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="nav-links"
            >
              F.A.Q
            </a>
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
