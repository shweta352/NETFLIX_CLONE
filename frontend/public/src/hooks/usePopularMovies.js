import axios from "axios";
import { useMovieContext } from "../context/MovieContext";
const usePopularMovies = async () => {
    const{setPopularMoives}=useMovieContext();
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQ5ZTY1MTk3OWYzNGQzYWIwODUyMDczNjI5Mzk5YyIsIm5iZiI6MTczODU2NzcyMS41MDU5OTk4LCJzdWIiOiI2N2EwNzAyOTE3NDJiNDRhMTRjYjgyNzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.B-lPxV2VVQiSW2GC_JTxapiFpa3XM0UJEpnJ-2DXiMc'
      }
    };

    const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/popular";
    try {
      const res = await axios.get(Now_Playing_Movie, options);
    //   console.log(res.data.results);
    setPopularMoives(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  export default usePopularMovies;