import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
const[data, setData] = useState([])


useEffect(() => {
  axios("http://localhost:3000/posts").then((res) => {
    console.log(res.data);

    setData(res.data);
  });
}, []);


  return (
    <div>
      <div className="intropart">
        <h5 className="title-1">SPRING/ SUMMER COLLECTION 2017</h5>
        <h1 className="title-2">Get up to 30% Off New Arrivals</h1>
        <button className="shopnow">SHOP NOW</button>
      </div>
      <div className="classes">
        <div className="class-1">
          <button className="womenbtn">WOMEN'S</button>
        </div>
        <div className="class-2">
          <button className="accbtn">ACCESSORIES'S</button>
        </div>
        <div className="class-3">
          <button className="menbtn">MEN'S</button>
        </div>
      </div>
      <div className="bodypart">
        <h3 className="title-3">New Arrivals</h3>
        <div className="line"></div>
        <div className="classes-2">
          <button className="allbutton">ALL</button>
          <button className="womenbutton">WOMEN'S</button>
          <button className="accbutton">ACCESSORIES'S</button>
          <button className="menbutton">MEN'S</button>
        </div>
        <div className="arrivals">
        {
          data?.map(item=>(
            <div key={item.id} className="prod-card">
              <img src={item.image} alt="" />
              <p className="prod-desc">{item.description}</p>
              <h3 className="prod-price">{"$" + item.price}</h3>
              <button className="addbtn">ADD TO CART</button>
            </div>
          ))
        }
        </div>
      </div>
      <div className="concpart">
      <h3 className="title-3">Best Sellers</h3>
      <div className="line"></div>
      <div className="bestsellers">
            <div className="prod1">
              <img src="https://preview.colorlib.com/theme/coloshop/images/product_6.png" alt="" />
              <p className="prod-desc">Pryma Headphones, Rose Gold & Grey</p>
              <h3 className="prod-price">$180.00</h3>
            </div>
            <div className="prod2">
              <img src="https://preview.colorlib.com/theme/coloshop/images/product_4.png" alt="" />
              <p className="prod-desc">Fujifilm X100T 16 MP Digital Camera (Silver)</p>
              <h3 className="prod-price">$520.00</h3>
            </div>
            <div className="prod3">
              <img src="https://preview.colorlib.com/theme/coloshop/images/product_2.png" alt="" />
              <p className="prod-desc">Samsung CF591 Series Curved 27-Inch FHD Monitor</p>
              <h3 className="prod-price">$610.00</h3>
            </div>
        </div>
        <h3 className="title-3">Latest Blogs</h3>
      <div className="line"></div>
      <div className="blogs">
      <div className="blog-1"></div>
      <div className="blog-2"></div>
      <div className="blog-3"></div>
        </div>
    </div>
    <div className="footer">
      <div className="leftpart">
      <h4>Newsletter</h4>
      <p className="subctitle">Subscribe to our newsletter and get 20% off your first purchase</p>
      </div>
      <div className="rightpart">
      <input type="text" placeholder="Your email"/>
      <button className="subcbtn">SUBSCRIBE</button>      
      </div>
    </div>
    </div>
  );
}

export default App;
