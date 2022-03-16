import React from 'react'
import styledComponents from 'styled-components'

const Item = ({ image_url, service_name}) => {
  return (
    <ItemInfo>
      <img src={image_url} />
      <p className='desc'>{service_name}</p>
    </ItemInfo>
  )
}

export default Item

const ItemInfo = styledComponents.div`
  margin:10px;
  img{
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
  }
  .desc{
    margin: 8px 0;
    font-size: 15px;
    font-weight: bold;
  }
  .price{
    font-weight: bold;
    color: #03045E;
    font-size: 20px;
  }
`;