import React from 'react'
import Content from './Home/Content'
import Popular from './Home/Popular'
import MainBanner from './Home/MainBanner'
import Knowhow from './Home/Knowhow'
import Category from './Home/Category'
import MiniBanner from './Home/MiniBanner'
import WantService from './Home/WantService'
import AppBanner from './Home/AppBanner'
import SoomgoStory from './Home/SoomgoStory'
const Home = () => {
  return (
    <>
      <MainBanner />
      <Category />
      <MiniBanner />
      <Knowhow />
      <WantService
        name="지금 바로 원하는 서비스를 받아보세요!"
      />
      <Content
        name="숨고 인기 서비스"
      />
      <Popular />
      <AppBanner/>
      <Content
        name="쓱싹쓱싹 청소하는 날"
      />
       <Content
        name="취미의 재발견"
      />
       <Content
        name="2022 취준을 부탁해"
      />
      <Content
       name="무엇이든 고치는 고수들"
      />
      {/* <LocationList/> */}
      <SoomgoStory
      name="숨고 이야기"/>
      {/* <BottomBanner/> */}
    </>
  )
}

export default Home