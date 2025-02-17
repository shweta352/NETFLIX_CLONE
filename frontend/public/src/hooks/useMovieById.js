import axios from "axios";
import { useMovieContext } from "../context/MovieContext";
import { useEffect } from "react";
const useMovieByld= (movieId)=> {
  const {setTrailer}=useMovieContext();
  useEffect(()=>{
const getMovieByld =async()=>{
  try{
    if (!movieId) return;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQ5ZTY1MTk3OWYzNGQzYWIwODUyMDczNjI5Mzk5YyIsIm5iZiI6MTczODU2NzcyMS41MDU5OTk4LCJzdWIiOiI2N2EwNzAyOTE3NDJiNDRhMTRjYjgyNzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.B-lPxV2VVQiSW2GC_JTxapiFpa3XM0UJEpnJ-2DXiMc'
      }
    };
    const res=await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options)
    // console.log(res.data.results)
    const tralir=res?.data?.results?.filter((item)=>{
        return item.type === "Trailer"
    })
    // console.log(tralir.length > 0 ? tralir[0] : res.data.results[0])
    setTrailer( tralir.length > 0 ? tralir[0] : res.data.results[0]);
   }catch(err){
   console.log(err);
   }
}
getMovieByld();
  },[movieId, setTrailer])
}
export default useMovieByld