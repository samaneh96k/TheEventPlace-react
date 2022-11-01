import React from "react";
import { Zoom } from "react-awesome-reveal";
import MyButton from "../Utils/myButton";
const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. here',"
    ],
    linkto: ["http://sales.b", "http://sales/m", "http://sales.s"],
    delay: [500, 0, 500]
  };
  const showBoxes = () => (
    priceState.prices.map((box, i) =>
     (<Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>
              ${priceState.prices[i]}
            </span>
            <span>
              {priceState.position[i]}
            </span>
          </div>
          <div className="pricing_description">
            {priceState.desc[i]}
            </div>
            <div className="pricing_buttons">
                <MyButton text="Purchase" link={ priceState.linkto[i]} />
            </div>
        </div>
      </Zoom>))
  
  );
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">
          {showBoxes()}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
