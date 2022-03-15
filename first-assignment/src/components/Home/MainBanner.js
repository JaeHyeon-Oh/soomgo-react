import React from 'react'
import styledComponents from 'styled-components'
import Carousel from "react-material-ui-carousel";

const items = [
  { name: "Juan",img :'https://assets.cdn.soomgo.com/images/banner/banner-model-recommend-service-web.png' },
  { name: "Jose",img :'https://dmmj3ljielax6.cloudfront.net/upload/service/6a497fde-2ba4-4a59-977c-41ce3be83e08.png' },
  { name: "Silupu",img :'https://assets.cdn.soomgo.com/images/banner/banner-model-recommend-service-web.png' },
  { name: "Maza",img :'https://assets.cdn.soomgo.com/images/banner/banner-model-recommend-service-web.png' }
];
const MainBanner = () => {
  return (
    <>

      <Container>
      <Carousel
          indicatorIconButtonProps={{
            style: {
              padding: "120px", // 1
              color: "white" // 3
            }
          }}
        >
           {items.map((element, index) => (
        <img src={element.img} alt={element.name}/>
        ))}
        </Carousel>
      </Container>
    </>
  )
}

export default MainBanner

const Container = styledComponents.div`
  max-width: 1200px;
  // heigth:1rem;
  margin: 40px auto;
  img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

