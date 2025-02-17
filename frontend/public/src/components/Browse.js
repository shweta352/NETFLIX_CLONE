import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import { useMovieContext } from "../context/MovieContext";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"; // Custom hook for fetching Now Playing Movies
import useTopRatedMovies from "../hooks/useTopRatedMovies"; // Custom hook for fetching Top Rated Movies
import usePopularMovies from "../hooks/usePopularMovies"; // Custom hook for fetching Popular Movies
import useUpcomingMovies from "../hooks/useUpcomingMovies"; // Custom hook for fetching Upcoming Movies
import SearchMovie from "./SearchMovie";


const Browse = () => {
  const { user} = useAuth();
  const {toggle}=useMovieContext();
   
  const navigate = useNavigate();

   // Use custom hooks to fetch movie data
   // useNowPlayingMovies();
  // useTopRatedMovies();
  // usePopularMovies();
  // useUpcomingMovies();
  // console.log(useNowPlayingMovies());
  //  

  // const nowPlayingMovies = async () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQ5ZTY1MTk3OWYzNGQzYWIwODUyMDczNjI5Mzk5YyIsIm5iZiI6MTczODU2NzcyMS41MDU5OTk4LCJzdWIiOiI2N2EwNzAyOTE3NDJiNDRhMTRjYjgyNzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.B-lPxV2VVQiSW2GC_JTxapiFpa3XM0UJEpnJ-2DXiMc'
  //     }
  //   };

  //   const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
  //   try{
  //     const res = await axios.get(Now_Playing_Movie, options);
  //     console.log(res.data.results);
  //   }catch(error) {
  //     console.log(error);
  //   }
  // }
  
useEffect(() => {
  if (!user) {
    navigate("/");
  }
 
}, [user, navigate]);
 const nowPlayingMovie = useNowPlayingMovies();
 const topratedMovie= useTopRatedMovies();
 const popularMovie= usePopularMovies();
 const upcomingMovie= useUpcomingMovies();

useEffect(() =>{


},[nowPlayingMovie, topratedMovie,popularMovie,upcomingMovie])

// console.log(nowPlayingMovieData);
// console.log(popularMovies);
// console.log(upcomingMovies);
// console.log(topRatedMovieData);

  return (

    <div>
    {
      toggle ? <SearchMovie />:(
      <>
      <MainContainer/>
      <MovieContainer /> 
      </>
      )
    }
    </div>
  );
};

export default Browse;
