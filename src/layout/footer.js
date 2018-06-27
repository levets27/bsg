// Framework Imports
import React, { Fragment } from "react";
import Image from "../global/components/image";
import foreground from "../images/layout/page-foreground.png";
import foregroundThumbnail from "../images/layout/page-foreground.thumb.png";
import background from "../images/layout/page-background.png";
import backgroundThumbnail from "../images/layout/page-background.thumb.png";
// Component Styles
import "./styles/footer.css";

const Footer = () => {
  return (
    <Fragment>
      <div className="Footer-imageWrap">
        <Image
          src={foreground}
          placeholder={foregroundThumbnail}
          cssClasses="Footer-image Footer-image--front"
        />
        <Image
          src={background}
          placeholder={backgroundThumbnail}
          cssClasses="Footer-image Footer-image--back"
        />
      </div>
      <footer className="Footer">© 2018 Bomb Shelter Games</footer>
    </Fragment>
  );
};

export default Footer;
