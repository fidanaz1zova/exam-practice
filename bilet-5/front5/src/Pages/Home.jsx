import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <div className="intropart">
        <div className="logo"></div>
        <div className="rightbox">
          <h2 className="discount">60% Discount</h2>
          <h1 className="wintcollect">Winter Collection</h1>
          <h5 className="bestcollect">Best Cloth Collection By 2020!</h5>
          <button className="shopnow">Shop Now</button>
        </div>
      </div>
      <div className="categorypart">
        <h1 className="category">Shop by Category</h1>
        <div className="categories">
          <div className="cat-1">
            <div className="title1">
              <h3 className="title-1">Owmen</h3>
              <h3 className="title-11">'S</h3>
            </div>
            <button className="deals1">Best New Deals</button>
            <h5 className="newcollect1">New Collection</h5>
          </div>
          <div className="cat-2">
          <h4 className="discount2">Discount!</h4>
            <h3 className="title-2">Winter Cloth</h3>
            <h5 className="newcollect2">New Collection</h5>
          </div>
          <div className="cat-3">
            <div className="title3">
              <h3 className="title-3">Man</h3>
              <h3 className="title-33">'S Cloth</h3>
            </div>
            <button className="deals2">Best New Deals</button>
            <h5 className="newcollect3">New Collection</h5>
          </div>
        </div>
      </div>
      <div className="productpart">
        <h1 className="products">Latest Products</h1>
        <div className="line"></div>
        </div>
        <div className="subpart">
            <div className="leftpart"></div>
            <div className="middlepart">
            <h1 className="news">Get Our</h1>
            <h1 className="news2">Latest Offers News</h1>
                <h5 className="subscribe">Subscribe news latter</h5>
                </div>
                <div className="rightpart">
                <input type="text" placeholder="Your email here" className="emailinp"/>
                <button className="shopnow2">Shop Now</button>
                </div>
        </div>
        <div className="lastpart">
        <div className="line1">
            <div className="title">Free Shipping Method</div>
            <div className="title">Secure Payment System</div>
            <div className="title">Secure Payment System</div>
        </div> 
            <div className="line2">
                <div className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit aperiam.</div>
                <div className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit aperiam.</div>
                <div className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit aperiam.</div>
            </div>
            </div>
      </div>
  );
}

export default App;
