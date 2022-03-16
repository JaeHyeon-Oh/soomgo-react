import React from 'react'
import styledComponents from 'styled-components'

const RequestItem = ({ image_url, service_name,request_count}) => {
  return (
    <ItemInfo>
      <img src={image_url} />
      <p className='desc'>{service_name}</p>
      <p className='desc'>{request_count}명</p>
    </ItemInfo>
  )
}

export default RequestItem

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
 
`;