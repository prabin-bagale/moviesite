import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Nowplaying = ({movies}) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <Container>
    <div className="clearfix mt-5">
        <h4 className='float-start'>Now Playing</h4>
        <Link to={'/'} className='float-end text-uppercase'>See all</Link>
    </div>
    <Slider {...settings}>
    {movies.map(function(movies){
        return(  
        <React.Fragment>
            <Link to={`/movies/${movies.id}`}>
                <Card>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}/>
                  <Card.Body> 
                  <span>{movies.title}</span>
                  </Card.Body>
                </Card>
            </Link>
            
        </React.Fragment>)
            
            
      
    })}
    </Slider>
    </Container>
  )
}

export default Nowplaying;