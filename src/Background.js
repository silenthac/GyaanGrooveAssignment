import React, { useEffect, useState } from "react";
import "./Background.css";
import HorCard from "./HorCard";
import VerCard from "./VerCard";

function Background() {
    const [data, setData] = useState([]);

  async function GetData() {
    const res = await fetch(
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
    );
    const data = await res.json();
    setData(data.events);
  }

  useEffect(() => {
    GetData();
  }, []);
  return (
    
    <div className="image-container">
      <img
        className="img"
        src="https://cdn0.weddingwire.com/vendor/849620/original/1280/jpg/1535235566-899f2daa6ee4b4cf-1530289391-6fe202a2deaacda5-1530289390-546615e808b4b635-153028.webp"
      />
      <div class="text-overlay">
        <div>Discover Exciting Events Happening Need you stay tuned for Updates!</div>
        <div className="lorem">
        Events are pivotal moments that mark significant occurrences or
        gatherings, ranging from personal milestones to global phenomena. They
        serve as catalysts for change, celebration, and reflection, shaping our
        memories and societies. Events can be joyous, like weddings and
        birthdays, fostering bonds and creating lasting impressions. They can
        also be somber, such as funerals or commemorations, offering closure and
        remembrance.
      </div>
      
      
      </div>
      
      <div className="cardupper1">Recommended shows <span>&#8594;</span></div>
      <div className="cardupper">
        {
            data.map(d=><VerCard props= {d}/>)
        }
        
        
      </div>

      

      

    </div>
  );
}

export default Background;
