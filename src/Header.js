import React, { useEffect, useState } from "react";
import "./Header.css";
import HorCard from "./HorCard";

function Header() {
  return (
    <div className="Header">
      <div className="left">
        <div className="title">BookUsNow</div>
      </div>
      <div className="middle">
        <button className="btn">Categories</button>
        <div className="search-container">
          <input className="input" type="text" placeholder="DJI phantom" />
          <button class="search-button">🔍</button>
        </div>
      </div>

      <div className="right">
        <i class="material-icons">favorite</i>
        <div className="fav">Favorites</div>
        <button className="sign">Sign In</button>
      </div>
      
    </div>
  );
}

export default Header;
