
import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function truncate(str, n){
    return str?.length > n ? str.substr(0,n-1) + "..." :str;
}
const base_url = "https://image.tmdb.org/t/p/original"
function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            const randnum = Math.floor(Math.random()*request.data.results.length -1)
            setMovie(request.data.results[randnum])


        }
        
      
           fetchData()
        
    }, []);

    
    
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${base_url}${movie?.backdrop_path})`,     
            backgroundPosition:"center center",
        }}>    
        
        <div className="banner__contents" >

            <h2 className="banner__title">{movie?.name || movie?.title || movie.original_name}</h2>{/* Title   */}
            {/* div with 2 buttons  */}
            {/* description */}
            <div className="banner__buttons">
                
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>

                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>

            </div>
        </div>
          

        <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner
