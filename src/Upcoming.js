import React, { useEffect, useState } from 'react'
import HorCard from './HorCard';
import './Upcoming.css'

const Upcoming = () => {
    const [data, setData] = useState([]);
    const [count,setCount] = useState(1);


    function callPrev()
    {
        if(count<=1)
            {
                return;
            }
        setCount(count=>count-1);

    }

    function callNext()
    {
        if(count>=5)return
        setCount(count=>count+1);

    }

  async function GetData() {
    const res = await fetch(
      `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${count}&type=upcoming`
    );
    const data = await res.json();
    console.log(data)
    setData(data.events);
  }

  useEffect(() => {
    GetData();
  }, [count]);
  return (
    
    <div className='cont'>
        <h1 className='tit'>Upcoming
        <span>&#8594;</span></h1>
    <div className='upcoming'>
        {
          data?.map(d=><HorCard props = {d}/>)
      }
      </div>
      <div className='below2'>
      <div onClick={()=>callPrev()} className='Previous'>Previous</div>
      <div  onClick={()=>callNext()} className='next'>next</div>
      
      </div>


    </div>
  )
}

export default Upcoming