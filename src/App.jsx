import axios from 'axios'
import React, { useState,useEffect } from 'react'
import MovieCard from './components/MovieCard'
import './App.css';
function App() {

const[movies,setMovies] = useState([])
const[term, setTerm] = useState('')

useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=806223231028bc12d5ba2f0219deefbb&language=en-US&page=1')
 
  .then(({data}) => {
    setMovies(data.results)
    .then(data => setMovies(data.results))
    console.log(data.results)
  })
}, [])
// const Api_search ='https://api.themoviedb.org/3/movie/{movie_id}?api_key=3ad96fdc72036f2fe4d7aa4074d78a95&language=en-US'
// const handleSearch = (e) => {
//   e.preventDefault()
//   fetch(Api_search + term)
//   .then(res => res.json())
//   .then(data => setMovies(data.results))

// }

  return (
  <div className="App">
    <div className="search-nav">
      <div>
        <h1>
          Movies
        </h1>
      </div>
      <div>
        {/* <form onSubmit={handleSearch}> */}
          <input  onChange={(e)=> setTerm(e.target.value)} />
          
          {/* <button>Search</button> */}
        {/* </form> */}
      </div>
    </div>
    <div className="movies">
    {
      movies.filter((movie) => {
        if(term===""){
          return movie
        }
        else if(movie.title.toLowerCase().includes(term.toLowerCase())){
          return movie
        }
      }
      )
      .map((movie)=>
        <MovieCard {...movie}/>
      )
    }
  </div>
  </div>
  )
}

export default App