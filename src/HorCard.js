import React from "react";
import "./HorCard.css";

const HorCard = ({props}) => {
    const {eventName,cityName,weather,distanceKm,imgUrl} = props
    console.log(eventName)
    console.log(imgUrl)
   const  backgroundImg = "https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
  return (
    <div class="container">
      <div class="banner-image" style={{ backgroundImage: `url(${backgroundImg})` }}> </div>
      <div className="below"> {eventName}</div>
      <div className="address">
        <div> 🏠{cityName}</div>
        <div>{weather}|{Math.trunc(distanceKm)} km</div>
      </div>
    </div>
  );
};

export default HorCard;
