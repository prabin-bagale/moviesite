import React,{useEffect, useState}from 'react';
import styledComponents from 'styled-components';
import axios, { Axios } from 'axios';
import Nowplaying from './nowplaying';
import { HomeWrapper } from './nowplaying/style';

const Homepage = () => {
  const [nowplaying,setnowplaying] = useState([]);
  const [popularMovies,setpopularMovies] = useState([]);
  const [topRated,settopRated] = useState([]);
  useEffect(()=>{
    getAllmovies();
    // fetch(` https://api.themoviedb.org/3/movie/now_playing?api_key=71e235f2dda87ed93031c00104ab54e7&language=en-US&page=1`)
    //       .then(Response => Response.json())
    //       .then(JSON => console.log(JSON))
  },[]);
  const getAllmovies = async() =>{
     const allmovies = await axios.all([
      axios.get(` https://api.themoviedb.org/3/movie/now_playing?api_key=71e235f2dda87ed93031c00104ab54e7&language=en-US&page=1`),
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=71e235f2dda87ed93031c00104ab54e7&language=en-US&page=1`),
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=71e235f2dda87ed93031c00104ab54e7&language=en-US&page=1`)
    ]);
    setnowplaying(allmovies[0].data.results)
    setpopularMovies(allmovies[1].data.results)
    settopRated(allmovies[2].data.results)
  }
  return (
    <HomeWrapper>

     <Nowplaying movies={nowplaying} />
    </HomeWrapper>
      
    
  )
}

export default Homepage;