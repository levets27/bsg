// Framework Imports
import React, { Fragment } from "react";
// import LazyLoad from "react-lazyload";
// Component Styles
import "./main.css";
// Component Imports
import Header from "./layout/header";
import Hero from "./global/components/hero";
import Button from "./global/components/button";
import Video from "./global/components/video";
import Gallery from "./global/components/gallery";
import Footer from "./layout/footer";
// Images
import dosHeroImg from "./images/dos-hero.png";
import dosLogo from "./images/logo/dos-silo-color-sm.png";
import dosVidPlaceholder from "./images/video/dos-placeholder.png";

const galleryImages = [
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    large: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    large: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    large: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    large: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    large: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    large: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    large: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    large: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    large: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  }
];

const Main = () => {
  return (
    <Fragment>
      <Hero image={dosHeroImg} fullscreen>
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
        <section className="MainContent-section" id="trailer">
          <Video
            id="TAsShJwaruA"
            placeholderImg={dosVidPlaceholder}
            title="Depths of Sanity - PAX East 2018 Trailer"
            autoplay
          />
        </section>
        <section className="MainContent-section">
          <Gallery images={galleryImages} />
        </section>
        <Footer />
      </main>
    </Fragment>
  );
};

export default Main;
