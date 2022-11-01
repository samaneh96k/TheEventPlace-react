import React from "react";
import {Fade} from "react-awesome-reveal"
const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade  delay={500}>
      <div className="font_righteous footer_logo_venue">The Event Place</div>
        <div className="footer_copyright"> The Event Place 2022 all rights reserved.</div>
        </Fade>
    </footer>
  );
};
export default Footer;
