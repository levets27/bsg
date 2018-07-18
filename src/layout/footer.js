// Framework Imports
import React from "react";
// Component Styles
import "styles/layout/footer.css";
// Component Imports
import Image from "components/image";

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
      <p className="Footer-content">© 2018 Bomb Shelter Games</p>
    </footer>
  );
};

export default Footer;
