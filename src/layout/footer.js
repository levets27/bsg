// Framework Imports
import React from "react";
import { Follow } from "react-twitter-widgets";
// Component Styles
import "styles/layout/footer.css";
// Component Imports
import Image from "components/image";
// Image Imports
import twitterLogo from "images/icons/twitter.svg";
import facebookLogo from "images/icons/facebook.svg";

const Footer = props => {
  return (
    <footer className="Footer">
      {props.images && (
        <div className="Footer-imageWrap">
          {props.images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              placeholder={image.thumbnail}
              cssClasses="Footer-image"
              style={{ zIndex: index }}
            />
          ))}
        </div>
      )}
      <div className="Footer-content">
        <span className="Footer-content-copyright">
          © 2018 Bomb Shelter Games
        </span>
        <span className="Footer-content-links">
          <a
            href="https://twitter.com/Bomb_Shelter"
            className="Footer-content-links-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterLogo} alt="Follow Bomb Shelter Games on Twitter" />
          </a>
          <a
            href="https://www.facebook.com/Bomb.Shelter.Games/"
            className="Footer-content-links-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookLogo}
              alt="Follow Bomb Shelter Games on Facebook"
            />
          </a>
        </span>
        <div className="Footer-content-links">
          <Follow
            username="Bomb_Shelter"
            options={{ size: "large", showCount: "false" }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
