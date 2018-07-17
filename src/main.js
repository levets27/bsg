// Framework Imports
import React, { Component, Fragment } from "react";
import throttle from "lodash/throttle";
import InViewMonitor from "react-inview-monitor";
//import Typing from "react-typing-animation";
//import LazyLoad from "react-lazyload";
// Component Styles
import "./main.css";
// Component Imports
import Header from "./layout/header";
import Hero from "./global/components/hero";
import Image from "./global/components/image";
import MainSection from "./global/components/mainSection";
import Button from "./global/components/button";
import Video from "./global/components/video";
import TypedContent from "./global/components/typedContent";
import ImageGallery from "./global/components/imageGallery";
import ContentPanel from "./global/components/contentPanel";
import Footer from "./layout/footer";
import BackToTop from "./layout/backToTop";
// Images
// Hero Banner Images
import dosHero from "./images/hero/dos-hero.png";
import dosHeroThumbnail from "./images/hero/dos-hero.thumb.png";
import dosLogoThumbnail from "./images/logo/dos-tentacles-sm.png";
import dosLogo from "./images/logo/dos-tentacles.png";
import sonarIcon from "./images/icons/sonar.gif";
import pickupsIcon from "./images/icons/pickups.png";
import tilesIcon from "./images/icons/tiles.png";
import shipIcon from "./images/icons/ship.png";
// Video Preview Images
import dosVidPreview from "./images/video/dos-previewImage.png";
import dosVidThumbnail from "./images/video/dos-previewImage.thumb.png";
// Our Games Images
import ballistickLogo from "./images/games/ballistick.png";
import bbbLogo from "./images/games/bbb.png";
import jqaLogo from "./images/games/jqa.png";
// Footer Images
import footerForeground from "./images/layout/page-foreground.png";
import footerForegroundThumbnail from "./images/layout/page-foreground.thumb.png";
import footerBackground from "./images/layout/page-background.png";
import footerBackgroundThumbnail from "./images/layout/page-background.thumb.png";

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

// Load footer images in the order you want them to layer... 2nd is on top of 1st, etc
const footerImages = [
  {
    src: footerBackground,
    thumbnail: footerBackgroundThumbnail
  },
  {
    src: footerForeground,
    thumbnail: footerForegroundThumbnail
  }
];

class Main extends Component {
  // Most of this is a bunch of garbage so we can control when we're showing the Back to Top button
  // We're checking the height of the window, and the offset of the MainContent container
  constructor(props) {
    super(props);
    // This lets us target the MainContent container, so we can calculate where it is relative to its parent container
    this.mainContent = React.createRef();
    // Storing these values in state so we can save and update them as necessary
    // When the top of the container is halfway up the screen, we're going to show the Back to Top button
    // We can add `width: window.innerWidth` if we want both at some point, but we only need height right now
    this.state = {
      showBackToTop: false,
      width: window.innerWidth,
      height: window.innerHeight,
      playFirstParagraph: false,
      endFirstParagraph: false,
      endSecondParagraph: false
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  // Adding the resize event so we can adjust the dimensions if necessary
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  // Remove when the component unmounts (when we change pages)
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  // Function that actually updates the height
  // Like with state, we can add `width: window.innerWidth` if we want that too
  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }
  // This is where we make the comparison and update state if we actually want to show the Back to Top button
  // Throttling so we're not calling it on every single scroll event, and firing 1000s of calls to this function
  handleScroll = throttle(() => {
    const shouldShow =
      this.mainContent.current.getBoundingClientRect().top <
      this.state.height / 2;
    if (this.state.showBackToTop !== shouldShow) {
      this.setState({ showBackToTop: shouldShow });
    }
  }, 200);

  firstIntroParagraph =
    "From 1991-1999 a series of sounds have been detected deep within the ocean. All heard around the world, 3000 miles away from the detection center. Further away than any known creature can communicate.";
  secondIntroParagraph =
    "Ever since, the sounds have proceeded, each year moving closer and closer to the same location. All except this year. The sounds have reached their destination and have stopped all together. It’s your job to investigate...";
  startFirstTyping = () => {
    this.setState({ playFirstParagraph: true });
  };
  endFirstTyping = () => {
    this.setState({ endFirstParagraph: true });
  };
  endSecondTyping = () => {
    this.setState({ endSecondParagraph: true });
  };

  // And here's the actual content
  render() {
    return (
      <Fragment>
        <div className="Main" onScroll={this.handleScroll}>
          <Hero imageSrc={dosHero} placeholder={dosHeroThumbnail} fullscreen>
            <Image
              src={dosLogo}
              placeholder={dosLogoThumbnail}
              alt="Depths of Sanity"
            />
            <Button type="ghost" size="large" href="#trailer">
              Watch Trailer
            </Button>
            <Button type="ghost" size="large" href="#demo">
              Download Demo
            </Button>
          </Hero>
          <main className="Main-content" ref={this.mainContent}>
            <Header />
            <MainSection id="trailer" fadeBg bottomDivider>
              <Video
                id="TAsShJwaruA"
                previewImage={dosVidPreview}
                placeholderImage={dosVidThumbnail}
                title="Depths of Sanity - PAX East 2018 Trailer"
                autoplay
              />
              <div className="MainSection-content u-retroFont">
                <InViewMonitor onInView={this.startFirstTyping}>
                  <p
                    className={`MainSection-content-introText ${
                      this.state.endSecondParagraph ? "" : "u-hidden"
                    }`}
                  >
                    {this.firstIntroParagraph}
                  </p>
                  <p
                    className={`TypedContent ${
                      this.state.endSecondParagraph ? "" : "u-hidden"
                    }`}
                  >
                    {this.secondIntroParagraph}
                  </p>
                </InViewMonitor>
                <div className="MainSection-content-typingWrapper">
                  {!this.state.endSecondParagraph && (
                    <Fragment>
                      <TypedContent
                        play={this.state.playFirstParagraph}
                        onDone={this.endFirstTyping}
                        removeCursor
                        hasPlaceholderText
                      >
                        {this.firstIntroParagraph}
                      </TypedContent>
                      <TypedContent
                        play={this.state.endFirstParagraph}
                        onDone={this.endSecondTyping}
                        hasPlaceholderText
                      >
                        {this.secondIntroParagraph}
                      </TypedContent>
                    </Fragment>
                  )}
                </div>
                <h3
                  className={`MainSection-heading ${
                    this.state.endSecondParagraph ? "u-fadeIn" : "u-hidden"
                  }`}
                >
                  Madness Comes to Us All
                </h3>
              </div>
            </MainSection>
            <MainSection>
              <div className="MainSection-content">
                <p>
                  Depths of Sanity is a Metroidvania action adventure game based
                  on exploring the depths of the ocean. The player is tasked
                  with investigating noises heard from the ocean that cannot be
                  explained by scientists. As they delve deeper they begin to
                  question their reality and their mission as a whole.
                </p>

                <ul className="MainSection-features">
                  <li>
                    <img src={tilesIcon} alt="" />
                    <h4 className="u-retroFont">6 Main Worlds</h4>
                    <p>
                      Reef, Caves, Sunken Ship, Volcano, Deep Ocean, The Depths
                    </p>
                  </li>
                  <li>
                    <img src={pickupsIcon} alt="" />
                    <h4 className="u-retroFont">Dozens of Unlockables</h4>
                    <p>
                      Torpedoes, flares, sonar, depth charges, lasers, bounce
                      shots, new hulls, and many more...
                    </p>
                  </li>
                  <li>
                    <img src={sonarIcon} alt="" />
                    <h4 className="u-retroFont">Unique Boss Fights</h4>
                  </li>
                  <li>
                    <img src={shipIcon} alt="" />
                    <h4 className="u-retroFont">Pixel Art Graphics</h4>
                  </li>
                </ul>
                <p className="MainSection-content MainSection-content--cta">
                  <Button size="large" type="ghost">
                    Enter the Depths...
                  </Button>
                </p>
              </div>
            </MainSection>
            <MainSection alt topDivider bottomDivider>
              <h2 className="u-accessibleText">Screenshot Gallery</h2>
              <ImageGallery images={galleryImages} showModal />
            </MainSection>
            <MainSection>
              <h2 className="MainSection-heading">More Games</h2>
              <ContentPanel image={ballistickLogo} imageAlt="Ballistick">
                <p>Awesome info about Ballistick!</p>
              </ContentPanel>
              <ContentPanel image={bbbLogo} imageAlt="Ball Bounce Blast">
                <p>Awesome info about Ball Bounce Blast!</p>
              </ContentPanel>
              <ContentPanel image={jqaLogo} imageAlt="Ballistick">
                <p>Awesome info about John Q Averageman!</p>
              </ContentPanel>
            </MainSection>
            <Footer images={footerImages} />
          </main>
        </div>
        <BackToTop visible={this.state.showBackToTop} />
      </Fragment>
    );
  }
}

export default Main;
