import React from 'react'
import Content from './Home/Content'
import Popular from './Home/Popular'
import MainBanner from './Home/MainBanner'
import Knowhow from './Home/Knowhow'
import Category from './Home/Category'
import MiniBanner from './Home/MiniBanner'
import WantService from './Home/WantService'
const Home = () => {
  return (
    <>
      <MainBanner />
      {/* <Category />
      <MiniBanner /> */}
      <Knowhow />
      <WantService
        title="지금 바로 원하는 서비스를 받아보세요!"
      />
      <Content
        title="숨고 인기 서비스"
      />
      <Popular />
      {/* <AppBanner/> */}
      <Content
        title="쓱싹쓱싹 청소하는 날"
      />
       <Content
        title="취미의 재발견"
      />
       <Content
        title="2022 취준을 부탁해"
      />
      <Content
        title="무엇이든 고치는 고수들"
      />
      {/* <LocationList/>
      <SoomgoStory/> */}
    </>
  )
}

export default Home