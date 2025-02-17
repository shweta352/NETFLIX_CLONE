import React from 'react'
import { useMovieContext } from '../context/MovieContext';


const MovieCard = ({posterPath, movieId}) => {
  const {setOpen,setId,nowPlayingMovieData,setTitle,setOverview} = useMovieContext();

  const handleOpen =() => {
        setId(movieId);
        setOpen(true);

        if(!nowPlayingMovieData){
          return
        }else{
          const data =nowPlayingMovieData.map((items) =>{
            return items;
          })
          const newData = data.filter(item =>
            item.id===movieId
          )
          setTitle(newData[0].title);
          setOverview(newData[0].overview)
        }

  
  
      }
  if(posterPath === null) return null;
  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="movie_banner" />
    </div>
  )
}

export default MovieCard
