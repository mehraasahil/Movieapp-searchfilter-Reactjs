import React from 'react'
import  './MovieCard.css'
const MovieCard = (props) => {
    const Api_img = "https://image.tmdb.org/t/p/w200"
  return (

   <div className="card">
    <div className="poster">
        <img src={Api_img + props.poster_path} alt="" />
  
        </div>
        <div className="info">
            <p className='title'>{props.title}</p>
            <p className='vote'>{props.vote_average}</p>
            
        </div>
    </div>
   
  )
}

export default MovieCard