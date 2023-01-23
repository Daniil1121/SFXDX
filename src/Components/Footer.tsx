import { ReactComponent as LogoSVG } from "./../assets/svg/general/Logo.svg";
import { ReactComponent as InstagramSVG } from "./../assets/svg/footer/inst.svg";
import { ReactComponent as FacebookSVG } from "./../assets/svg/footer/facebook.svg";
import { ReactComponent as YoutubeSVG } from "./../assets/svg/footer/youtube.svg";
import { ReactComponent as TwitterSVG } from "./../assets/svg/footer/twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__navigation">
          <div className="inform">
            <nav>
              <ul className="inform__list list-reset">
                <li className="inform__item">
                  <a href="#">Privacy Policy </a>
                </li>
                <li className="inform__item">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="inform__item">
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="logo">
            <LogoSVG className="logo__svg" />
          </div>
          <div className="socials">
            <nav>
              <ul className="socials__list list-reset">
                <li className="socials__item">
                  <a target="_blank" href="https://facebook.com">
                    <FacebookSVG />
                  </a>
                </li>
                <li className="social__item">
                  <a target="_blank" href="https://twitter.com">
                    <TwitterSVG />
                  </a>
                </li>
                <li className="social__item">
                  <a target="_blank" href="https://www.youtube.com/">
                    <YoutubeSVG />
                  </a>
                </li>
                <li className="social__item">
                  <a target="_blank" href="https://www.instagram.com/">
                    <InstagramSVG />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer__rights">
          <p className="footer__rights__text">
            ©2022 All rights reserved. Powered by Atla
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
