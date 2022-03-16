import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Content from './Home/Content'
import Popular from './Home/Popular'
import MainBanner from './Home/MainBanner'
import Knowhow from './Home/Knowhow'
import Category from './Home/Category'
import MiniBanner from './Home/MiniBanner'
import WantService from './Home/WantService'
import AppBanner from './Home/AppBanner'
import SoomgoStory from './Home/SoomgoStory'
import PopularService from './Home/PopularService'
const Home = () => {
  const [services, setServices] = useState([]);
  // const [knowhows, setKnowhows] = useState([]);
  useEffect(() => {
      axios.get('http://3.39.83.84:8000/exhibitionservice/?format=json')
          .then(response => {
            setServices(response.data);
          });
  }, []);
//   useEffect(() => {
//     axios.get('http://3.39.83.84:8000/knowhow/?format=json')
//         .then(response => {
//           setKnowhows(response.data);
//         });
// }, []);
  return (
    <>
      <MainBanner />
      <Category />
      <MiniBanner />
      {/* {knowhows.map(knowhow => {
      <Knowhow 
      pro={knowhow.pro}
      coverImageUrl={knowhow.coverImageUrl}
      name={knowhow.name}
      />
    })} */}
    <Knowhow/>
      
      <WantService
        name="지금 바로 원하는 서비스를 받아보세요!"
      />
      <PopularService
        name="숨고 인기 서비스"
      />
      <Popular />
      <AppBanner/>
      {services.map((element, index) => (
      <Content
        name={element.name}
        services={element.services}
      />
      ))}
      {/* <LocationList/> */}
      <SoomgoStory
      name="숨고 이야기"/>
      {/* <BottomBanner/> */}
    </>
  )
}

export default Home