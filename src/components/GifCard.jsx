import React from 'react'

function GifCard({url,title}) {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <div className="card__img">
        <img src={url} alt={title}/>
        
      </div>
        <p>{title}</p>
      
    </div>
  )
}

export default GifCard