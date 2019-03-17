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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
              <title>Follow Bomb Shelter Games on Twitter</title>
              <rect className="cls-1" width="400" height="400" />
              <path
                className="cls-2"
                d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/Bomb.Shelter.Games/"
            className="Footer-content-links-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 58 58"
            >
              <title>Follow Bomb Shelter Games on Facebook</title>
              <path
                className="cls-1"
                d="M54.8,0H3.2A3.2,3.2,0,0,0,0,3.2V54.8A3.2,3.2,0,0,0,3.2,58H31V35.57H23.45V26.79H31V20.33c0-7.49,4.58-11.57,11.26-11.57A64.2,64.2,0,0,1,49,9.1v7.83h-4.6c-3.64,0-4.35,1.72-4.35,4.26v5.59h8.7l-1.13,8.78H40V58H54.8A3.2,3.2,0,0,0,58,54.8V3.2A3.2,3.2,0,0,0,54.8,0Z"
              />
              <path
                id="f"
                className="cls-2"
                d="M40,58V35.57h7.57l1.13-8.78H40V21.2c0-2.54.71-4.26,4.35-4.26H49V9.1a64.2,64.2,0,0,0-6.75-.34C35.56,8.76,31,12.84,31,20.33v6.46H23.45v8.78H31V58Z"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCuyg6cw4xOHIUR1hoCPB6sg"
            className="Footer-content-links-youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 176 124"
            >
              <title>Bomb Shelter Games on YouTube</title>
              <path
                className="cls-1"
                d="M180.32,53.36A22.11,22.11,0,0,0,164.76,37.7C151,34,96,34,96,34s-55,0-68.76,3.7A22.11,22.11,0,0,0,11.68,53.36C8,67.18,8,96,8,96s0,28.82,3.68,42.64A22.11,22.11,0,0,0,27.24,154.3C41,158,96,158,96,158s55,0,68.76-3.7a22.11,22.11,0,0,0,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36ZM78,122.17V69.83L124,96Z"
                transform="translate(-8 -34)"
              />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
