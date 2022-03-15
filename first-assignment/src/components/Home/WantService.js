import React from 'react'
import styledComponents from 'styled-components'
import ItemPrice from './Item/ItemPrice'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const items = [
  { service_name: "생명을 불어넣는 개성적인 캐릭터 디자인 제작",
  image_url :'https://static.cdn.soomgo.com/upload/instantPurchase/093cf30a-4416-41b9-9948-c9f40866d798.jpg?h=320&w=480' ,
  price:"770,000원 ~"},
  { service_name: "생명을 불어넣는 개성적인 캐릭터 디자인 제작",
  image_url :'https://dmmj3ljielax6.cloudfront.net/upload/service/05389ab5-c05d-45c8-abe1-d0b90019cb75.png' ,
  price:"770,000원 ~" },
  { service_name: "생명을 불어넣는 개성적인 캐릭터 디자인 제작",
  image_url :'https://static.cdn.soomgo.com/upload/instantPurchase/093cf30a-4416-41b9-9948-c9f40866d798.jpg?h=320&w=480' ,
  price:"770,000원 ~" },
  { service_name: "생명을 불어넣는 개성적인 캐릭터 디자인 제작",
  image_url :'https://dmmj3ljielax6.cloudfront.net/upload/service/05389ab5-c05d-45c8-abe1-d0b90019cb75.png' ,
  price:"770,000원 ~" },
  { service_name: "생명을 불어넣는 개성적인 캐릭터 디자인 제작",
  image_url :'https://static.cdn.soomgo.com/upload/instantPurchase/093cf30a-4416-41b9-9948-c9f40866d798.jpg?h=320&w=480', 
  price:"770,000원 ~"},
  { service_name: "생명을 불어넣는 개성적인 캐릭터 디자인 제작",
  image_url :'https://dmmj3ljielax6.cloudfront.net/upload/service/05389ab5-c05d-45c8-abe1-d0b90019cb75.png' ,
  price:'770,000원 ~'},
];

const buttonItems=[
  {button_name:"나는 가수다"},
  {button_name:"나는 가수다"},
  {button_name:"나는 가수다"},
  
]
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  overflow: "hidden",
};

const WantService = ({name}) => {
  return (
    <>
    <Container>
        <h1 className='title'>{name}</h1>
        <Button>
        {buttonItems.map((element, index) => (
                   
                   <button>{element.button_name}</button>
                  
                 ))}

        </Button>
        <Slider {...settings}>
      
        {items.map((element, index) => (
                   
          <ItemPrice
            image_url={element.image_url}
            service_name= {element.service_name}
            price={element.price}
          />
         
        ))}
        </Slider>
      </Container>
    </>
  )
}

export default WantService

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 0 auto 100px auto;
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
  gap: 30px;
  margin-top: 40px;
`;
const Button = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 15px;
  margin-top: 40px;
`;