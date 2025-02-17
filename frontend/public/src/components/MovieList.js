import React from 'react'
import MovieCard from './MovieCard';


const movieList =({title, movie=[], searchMovie=false}) => {
  
  return (
    <div className='px-8'>
      <h1 className={`${searchMovie ?"text-black" : "text-white"} text-3xl py-3`}>{title}</h1>
      <div className='overflow-x-auto no-scrollbar cursor-pointer flex'>
        <div className='flex items-center'>
        {
  Array.isArray(movie) ? movie.map((movie) => (
    <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} />
  )) : <p>No movies available</p>
}

        </div>
      </div>
    </div>
  )
}

export default movieList
