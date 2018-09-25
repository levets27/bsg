// Footer Background Images
import footerForeground from "images/layout/page-foreground.png";
import footerForegroundThumbnail from "images/layout/page-foreground.thumb.png";
import footerBackground from "images/layout/page-background.png";
import footerBackgroundThumbnail from "images/layout/page-background.thumb.png";

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

export default footerImages;