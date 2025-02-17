// src/components/MovieContainer.js
import React from "react";
import MovieList from "./MovieList";
import { useMovieContext } from "../context/MovieContext";




const MovieContainer = () => {
  const {nowPlayingMovieData,topRatedMovieData,upcomingMovies, popularMovies } =useMovieContext();


  return (
    
    <div className="bg-black">
      <div className="-mt-52 ralative z-10">
      <MovieList title ={"Popular Movies"} movie ={popularMovies} />
      <MovieList title ={"Now Playing Movies"} movie ={nowPlayingMovieData} />
      <MovieList title ={"Top rated Movies"} movie ={topRatedMovieData} />
      <MovieList title={"Upcoming Movies"}movie ={upcomingMovies} />
      </div>
    </div>
  );
};

export default MovieContainer;
