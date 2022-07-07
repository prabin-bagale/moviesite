import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleMovie = () => {
    const [movie,setMovie] = useState({});
    let {id}= useParams();
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=71e235f2dda87ed93031c00104ab54e7&language=en-US`
        ).then(res =>setMovie(res.data)).catch(err =>console.error(err));
    },[]);
  return(
    <Container className='mt-5'>
        <Row>
            <Col md='6'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
            </Col>
            <Col md='6'>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <ul>
                <li>Revenue : {movie.revenue}</li>
                <li>Popularity : {movie.popularity}</li>
                <li>Original-language : {movie.original_language}</li>
                <li>Genres: {Array.isArray(movie.genres) && movie.genres.map(el =>el.name)}</li>
                <li>ReleaseDate : {movie.release_date}</li>
            </ul>
            </Col>
        </Row>
    </Container>
  ) 
}

export default SingleMovie;