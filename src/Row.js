import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const base_url = "https://image.tmdb.org/t/p/original/"
function Row({title, fetchUrl, isLargeRow }) {
const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("")


useEffect(() => {
    async function fetchData(){
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results);
        return request;

    }
    fetchData()
   
}, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars:{
            // https:
            autoplay:1,
        },

    }
    const handleClick = (movie) =>{
        console.log(movie)
        
        if(trailerUrl){
            setTrailerUrl('');
        }else {
            movieTrailer(movie?.title || "")
            .then((url)=>{
                console.log(url)

                const urlParams =new URLSearchParams( new URL(url).search);
                setTrailerUrl (urlParams.get('v'));

            })
            .catch((error)=>console.log(error));
        }
    
    }
    return (
        <div className="row">
          <h2> {title}</h2>  

          <div className="row__posters">
            {movies.map(movie=> (
        <img key = {movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`}  onClick={()=>handleClick(movie)} src={`${base_url}${isLargeRow ? movie.poster_path : movie.poster_path}` }alt={movies.name} /> ))}
          </div>

         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          
        </div>
    )
}

export default Row

