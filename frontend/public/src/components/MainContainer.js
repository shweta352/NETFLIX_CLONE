import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useMovieContext } from "../context/MovieContext";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

function MainContainer() {
    const { nowPlayingMovieData,title,overview,setTitle, setOverview} = useMovieContext();
    const { loading, error } = useNowPlayingMovies(); // Ensure data fetching runs

    // ✅ Show loading message while data is being fetched
    if (loading) {
        return <p>Loading movies...</p>;
    }

    // ✅ Show error message if there's an API error
    if (error) {
        return <p>Error fetching movies: {error.message}</p>;
    }

    // ✅ Ensure we have at least one movie before accessing index 0
    if (!nowPlayingMovieData || nowPlayingMovieData.length === 0) {
        return <p>No movies available.</p>;
    }

    if(!title || !overview ) {
        setTitle(nowPlayingMovieData[0].title)
        setOverview(nowPlayingMovieData[0].overview)
    }

    console.log(nowPlayingMovieData[0]);

    const {  id } = nowPlayingMovieData[0];

    return (
        <div>
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieid={id} />
        </div>
    );
}

export default MainContainer;