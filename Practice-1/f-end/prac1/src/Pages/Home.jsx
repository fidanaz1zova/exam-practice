import { useEffect, useState } from "react";
import sofa from "../assets/images/rbox.webp";
import greensofa from "../assets/images/sofa1 (2).webp";
import colorfulsofa from "../assets/images/sofa2.webp";
import yellowsofa from "../assets/images/sofa3.webp";
import whitesofa from "../assets/images/sofa4.webp";

function App() {
  return (
    <div>
      <div className="intropart">
        <div className="leftbox">
          <h1 className="title1">WOOD & CLOTH SOFA</h1>
          <p className="lorem1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi
            iure nemo id consequatur quisquam illo, sint error dicta inventore.
          </p>
          <button className="buynow">BUY NOW</button>
        </div>
        <div className="rightbox">
          <img className="sofa" src={sofa} alt="" />
        </div>
      </div>
      <div className="bestseller">
        <div className="title">
          <h1 className="title2">Best Sellers</h1>
          <h5 className="shop">Shop</h5>
        </div>
        <div className="bestproducts">
          <div className="prod1">
            <img src={greensofa} alt="" />
            <h3>Quartz Belt Watch</h3>
            <h4 className="price">$150.00</h4>
          </div>
          <div className="prod2">
            <img src={colorfulsofa} alt="" />
            <h3>Quartz Belt Watch</h3>
            <h4 className="price">$150.00</h4>
          </div>
          <div className="prod3">
            <img src={yellowsofa} alt="" />
            <h3>Quartz Belt Watch</h3>
            <h4 className="price">$150.00</h4>
          </div>
          <div className="prod4">
            <img src={whitesofa} alt="" />
            <h3>Quartz Belt Watch</h3>
            <h4 className="price">$150.00</h4>
          </div>
        </div>
      </div>
      <div className="subpart">
        <h6 className="subcaption">JOIN OUR NEWSLETTER</h6>
        <h1 className="subtitle">Subscribe to get Updated with new offers</h1>
        <div className="inppart">
          <input
            className="emailinp"
            type="text"
            placeholder="Enter Email Address"
          />
          <button className="subbtn">SUBSCRIBE NOW</button>
        </div>
      </div>
      <div className="productpart">
        <div className="title">
          <h1 className="title2">Awesome</h1>
          <h5 className="shop">Shop</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
