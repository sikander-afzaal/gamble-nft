import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="social">
          <a href="#">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <img src="/logo.svg" alt="" />
        <p className="copyright">© 2022 MTG. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
