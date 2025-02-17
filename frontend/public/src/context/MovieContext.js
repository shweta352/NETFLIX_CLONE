import { createContext, useContext } from "react";
import { useState } from "react";

// ✅ Create Context
const MovieContext = createContext();

// ✅ Create a Provider Component
export const MovieProvider = ({ children }) => {
  const [nowPlayingMovieData, setnowPlayingMovieData] = useState({}); 
  const [topRatedMovieData, settopRatedMovieData] = useState({}); 
  const [upcomingMovies,setUpcomingMovies]=useState({});
  const [popularMovies,setPopularMoives]=useState({});
  const [toggle,setToggle]=useState(false);
  const [trailer, setTrailer] =useState(null)
  const [open,setOpen]= useState(false);
  const [id, setId] = useState("");
  const [title,setTitle]= useState("");
  const [overview, setOverview] = useState("");
  return (
    <MovieContext.Provider value={{title,overview,nowPlayingMovieData,topRatedMovieData,upcomingMovies,popularMovies, setnowPlayingMovieData,setPopularMoives,setUpcomingMovies,settopRatedMovieData, toggle, setToggle, trailer, setTrailer, open, setOpen, id, setId,setTitle,setOverview}}>{children}</MovieContext.Provider>
  )
};
// ✅ Custom Hook for easy access
export const useMovieContext = () => {
  return useContext(MovieContext);
};