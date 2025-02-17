import axios from 'axios';
import React, { useState } from 'react'
import { useSearchContext } from '../context/SearchContext';
import {useAuth} from '../context/AuthContext';
import MovieList from '../components/MovieList';

function SearchMovie() {
  const {setLoading ,loading} = useAuth();
  const {setSearchedMovie, setMovieName,movieName, searchedMovie} = useSearchContext();
  const [SearchMovie, setSearchMovie] = useState("");

  const submitHandler = async(e) => {
    console.log(setLoading);
    e.preventDefault();


    const search_url=`https://api.themoviedb.org/3/search/movie?query=${SearchMovie}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQ5ZTY1MTk3OWYzNGQzYWIwODUyMDczNjI5Mzk5YyIsIm5iZiI6MTczODU2NzcyMS41MDU5OTk4LCJzdWIiOiI2N2EwNzAyOTE3NDJiNDRhMTRjYjgyNzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.B-lPxV2VVQiSW2GC_JTxapiFpa3XM0UJEpnJ-2DXiMc'
      }
    };
    setLoading(true);

    try{
      const res= await axios.get(search_url,options);
      console.log(res.data.results);
      setMovieName(SearchMovie);
      setSearchedMovie(res.data.results);
      console.log(movieName);
      console.log(searchedMovie);


    }catch(error){
      console.log(error)
    }finally{
      setLoading(false);
    }
    setSearchMovie("");
  }
  return (
    <>
    <div className='flex justify-center pt-[10%] w-[100%]'>
      <form onSubmit={submitHandler} className='w-[50%]'>
        <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
          <input value={SearchMovie} onChange={(e) => {setSearchMovie(e.target.value)}} className='w-full outline-none runded-md text-lg' type='text' placeholder='Search Movies...' />
          <button className='bg-red-800 text-white rounded-md px-4 py-2'>{loading ? "Loading..." : "Search"}</button>
        </div>
      </form>
    </div>
    
    {
      searchedMovie !== null ? (<MovieList title ={movieName} searchMovie={true} movie ={searchedMovie} />) : (<h1>Movie Not Found!</h1>)
    }

    </>
  )
}

export default SearchMovie
