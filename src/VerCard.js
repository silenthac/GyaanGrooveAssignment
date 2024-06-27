import React from 'react'
import './VerCard.css'

const VerCard = ({props}) => {
    console.log(props)
    const {eventName,cityName,weather,distancekm,imgUrl} = props
    console.log(imgUrl)
    const backgroundImage = "https://i.pinimg.com/564x/db/38/bc/db38bcf6599076af9a2bd0b66e623953.jpg"
    console.log(backgroundImage)
  return (
    <div className='card'>
        <div className="card-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="card-content">
          <h2 className="card-title">{eventName}</h2>
          <p className="card-description">{cityName}|{weather}</p>
        </div>
      </div>

    </div>
  )
}

export default VerCard