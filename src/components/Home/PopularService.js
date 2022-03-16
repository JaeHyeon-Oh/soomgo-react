import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styledComponents from 'styled-components'
import RequestItem from './Item/RequestItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  overflow: "hidden",
};

const Content = ({name}) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
      axios.get('http://3.39.83.84:8000/service/?format=json')
          .then(response => {
            setServices(response.data);
          });
  }, []);
  return (
    <>
    
      <Container>
        <h1 className='title'>{name}</h1>
        <Slider {...settings}>
      
        {services.map((element, index) => (
                   
          <RequestItem
            image_url={element.image_url}
            service_name= {element.service_name}
            request_count={element.request_count}
          />
         
        ))}
       
        
        </Slider>
      </Container>
    </>
  )
}

export default Content

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 10px auto;
  .slick-prev:before,
  .slick-next:before {
    color: gray;
  }
  .title{
    margin-top: 100px;
  }
`;

const ItemWrap = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 40px;
`;
