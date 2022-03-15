import React from 'react'
import styledComponents from 'styled-components'
import Item from './Item/Item'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { service_name: "Juan",image_url :'https://assets.cdn.soomgo.com/images/banner/banner-model-recommend-service-web.png' },
  { service_name: "Jose",image_url :'https://dmmj3ljielax6.cloudfront.net/upload/service/6a497fde-2ba4-4a59-977c-41ce3be83e08.png' },
  { service_name: "Silupu",image_url :'https://assets.cdn.soomgo.com/images/banner/banner-model-recommend-service-web.png' },
  { service_name: "Maza",image_url :'https://assets.cdn.soomgo.com/images/banner/banner-model-recommend-service-web.png' },
  { service_name: "Jose",image_url :'https://dmmj3ljielax6.cloudfront.net/upload/service/6a497fde-2ba4-4a59-977c-41ce3be83e08.png' },
  { service_name: "Silupu",image_url :'https://assets.cdn.soomgo.com/images/banner/banner-model-recommend-service-web.png' },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  overflow: "hidden",
};

const Content = ({name}) => {
  return (
    <>
      <Container>
        <h1 className='title'>{name}</h1>
        <Slider {...settings}>
      
        {items.map((element, index) => (
                   
          <Item
            image_url={element.image_url}
            service_name= {element.service_name}
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
