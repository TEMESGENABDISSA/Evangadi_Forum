import style from "./Footer.module.css";
import { FiFacebook } from "react-icons/fi";
import image from "../../assets/images/evangadi.png";
import { FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={style["evangadi-footer"]}>
      <div className={style["footer-container"]}>
        <div className={style["footer-column"]}>
          {/* Column 1: Logo and Social Icons */}
          <img src={image} className={style["footer-logo"]} alt="footer-logo" />

          <div className={style["social-icons"]}>
            <a
              href="https://www.facebook.com/evangaditech"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer" // Added for security best practice
            >
              <FiFacebook />
            </a>
            <a
              href="https://www.instagram.com/evangaditech"
              aria-label="Instagram"
              target="_blank" // Corrected target attribute
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@EvangadiTech"
              aria-label="YouTube"
              target="_blank" // Corrected target attribute
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className={style["footer-column"]}>
          <h5 className={style["footer-heading"]}>Useful Link</h5>

          <a href="/how-it-works" className={style["footer-link"]}>
            How it works
          </a>
          <a
            href="https://www.evangadi.com/legal/terms"
            target="_blank"
            rel="noopener noreferrer"
            className={style["footer-link"]}
          >
            Terms of Service
          </a>
          <a
            href="https://www.evangadi.com/legal/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className={style["footer-link"]}
          >
            Privacy policy
          </a>
        </div>

        {/* Column 3: Contact Info */}
        <div className={style["footer-column" + " " + style["contact"]]}>
          <h5 className={style["footer-heading"]}>Contact Info</h5>
          <p className={style["contact-item"]}>Evangadi Networks</p>
          <a
            href="mailto:support@evangadi.com"
            className={style["footer-link"] + " " + style["contact-item"]}
          >
            support@evangadi.com
          </a>
          <p className={style["contact-item"]}>+1-209-386-2702</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
