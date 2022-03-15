import React from 'react'
import styledComponents from 'styled-components'

const ItemPrice = ({ image_url, service_name, price }) => {
  return (
    <ItemInfo>
      <img src={image_url} />
      <p className='desc'>{service_name}</p>
      <p className='price'>{price}</p>
    </ItemInfo>
  )
}

export default ItemPrice

const ItemInfo = styledComponents.div`
  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  .desc{
    margin: 8px 0;
    font-size: 20px;
  }
  .price{
    font-weight: bold;
    color: #03045E;
    font-size: 20px;
  }
`;