import React from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header-footer/header";
import Footer from "./components/header-footer/footer";
import Featured from "./components/featured/index";
import PlaceInfo from "./components/PlaceInfo/index";
import Highlights from "./components/highlights/index";
import Pricing from "./components/Pricing/index";
import Location from "./components/Location/index";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="eventPlaceInf">
        <PlaceInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="loction">
        <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
