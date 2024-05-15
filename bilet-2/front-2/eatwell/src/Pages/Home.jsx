import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <div class="container-1">
        <div className="part-1">
          <h1 className="title-2">Welcome To EatWell</h1>
          <h5 className="title-3">
            Come and eat well with our delicious & healthy foods.
          </h5>
          <button className="reservation">Reservation</button>
        </div>
      </div>
      <div className="container-2">
        <h3 className="title-4">Our Story</h3>
        <h1 className="title-5">Welcome</h1>
        <h5 className="title-6">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. A small river
          named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of
          sentences fly into your mouth.
        </h5>
        <button className="learn">Leran more about us</button>
      </div>
    </div>
  );
}

export default Home;
