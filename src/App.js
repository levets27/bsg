// Framework Imports
import React, { Fragment } from "react";
// Component Styles
import "./app.css";
// Component Imports
import Header from "./layout/header";
import Hero from "./global/components/hero";
import Button from "./global/components/button";
import Video from "./global/components/video";
import Footer from "./layout/footer";
// Images
import dosHeroImg from "./images/dos-hero.png";
import dosLogo from "./images/dos-logo-color.png";
import dosVidPlaceholder from "./images/dos-video-placeholder.png";

const App = () => {
  return (
    <Fragment>
      <Hero image={dosHeroImg}>
        <img src={dosLogo} alt="Depths of Sanity" />
        <Button type="ghost" size="large" href="#trailer">
          Watch Trailer
        </Button>
        <Button type="ghost" size="large" href="#demo">
          Download Demo
        </Button>
      </Hero>
      <main className="MainContent">
        <Header />
        <Video
          id="TAsShJwaruA"
          placeholderImg={dosVidPlaceholder}
          title="DoS Trailer"
          autoplay
        />
        <Footer />
      </main>
    </Fragment>
  );
};

export default App;
