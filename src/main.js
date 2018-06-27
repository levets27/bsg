// Framework Imports
import React, { Component, Fragment } from "react";
// import LazyLoad from "react-lazyload";
// Component Styles
import "./main.css";
// Component Imports
import Header from "./layout/header";
import Hero from "./global/components/hero";
import MainSection from "./global/components/mainSection";
import Button from "./global/components/button";
import Video from "./global/components/video";
import ImageGallery from "./global/components/imageGallery";
import ContentPanel from "./global/components/contentPanel";
import Footer from "./layout/footer";
import BackToTop from "./layout/backToTop";
// Images
import dosHero from "./images/hero/dos-hero.png";
import dosHeroThumbnail from "./images/hero/dos-hero.thumb.png";
import dosLogo from "./images/logo/dos-silo-color-sm.png";
import dosVidPreview from "./images/video/dos-previewImage.png";
import dosVidThumbnail from "./images/video/dos-previewImage.thumb.png";

const galleryImages = [
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    src: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    src: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    src: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    src: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    src: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    src: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    src: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    src: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  },
  {
    thumbnail: "https://www.fillmurray.com/g/200/200",
    title: "Fill Murray",
    src: "https://www.fillmurray.com/g/700/700",
    description:
      "This is a classic image of Bill Murray, presented by fillmurray.com"
  }
];

class Main extends Component {
  state = {
    showBackToTop: false
  };
  listenScrollEvent = () => {
    console.log("scrolling");
    this.setState({ showBackToTop: true });
  };
  render() {
    return (
      <Fragment>
        <div className="Main" onScroll={this.listenScrollEvent}>
          <Hero imageSrc={dosHero} placeholder={dosHeroThumbnail} fullscreen>
            <img src={dosLogo} alt="Depths of Sanity" />
            <Button type="ghost" size="large" href="#trailer">
              Watch Trailer
            </Button>
            <Button type="ghost" size="large" href="#demo">
              Download Demo
            </Button>
          </Hero>
          <main className="Main-content">
            <Header />
            <MainSection id="trailer">
              <Video
                id="TAsShJwaruA"
                previewImage={dosVidPreview}
                placeholderImage={dosVidThumbnail}
                title="Depths of Sanity - PAX East 2018 Trailer"
                autoplay
              />
              <h3 className="MainSection-heading">Madness Comes to Us All</h3>
              <p className="MainSection-content">
                From 1991-1999 a series of sounds have been detected deep within
                the ocean. All heard around the world, 3000 miles away from the
                detection center. Further away than any known creature can
                communicate.
              </p>

              <p className="MainSection-content">
                Ever since, the sounds have proceeded, each year moving closer
                and closer to the same location. All except this year. The
                sounds have reached their destination and have stopped all
                together. It’s your job to investigate...
              </p>

              <p className="MainSection-content">
                Depths of Sanity is a Metroidvania action adventure game based
                on exploring the depths of the ocean. The player is tasked with
                investigating noises heard from the ocean that cannot be
                explained by scientists. As they delve deeper they begin to
                question their reality and their mission as a whole.
              </p>

              <ul className="MainSection-content">
                <li>
                  <strong>6 Main worlds</strong> – Reef, Caves, Sunken Ship,
                  Volcano, Deep Ocean, The Depths
                </li>
                <li>
                  <strong>Dozens of unlockables</strong> – Torpedoes, flares,
                  sonar, depth charges, lasers, bounce shots, new hulls, and
                  many more...
                </li>
                <li>
                  <strong>Unique boss fights</strong>
                </li>
                <li>
                  <strong>Pixel Art Graphics</strong>
                </li>
              </ul>
              <p className="MainSection-content MainSection-content--cta">
                <Button size="large" type="ghost">
                  Enter the Depths...
                </Button>
              </p>
            </MainSection>
            <MainSection>
              <h2 className="u-accessibleText">Screenshot Gallery</h2>
              <ImageGallery images={galleryImages} showModal />
            </MainSection>
            <MainSection>
              <h2 className="MainSection-heading">More Games</h2>
              <ContentPanel />
              <ContentPanel />
              <ContentPanel />
            </MainSection>
            <Footer />
          </main>
        </div>
        <BackToTop visible={this.state.showBackToTop} />
      </Fragment>
    );
  }
}

export default Main;
