import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styledComponents from 'styled-components'
import Tip from './Item/Tip'

const Knowhow = () => {
  const [knowhows, setKnowhows] = useState([]);

  useEffect(() => {
      axios.get('http://3.39.83.84:8000/knowhow/?format=json')
          .then(response => {
            setKnowhows(response.data);
          });
  }, []);
  return (
    <>
    <Container>
        <h1>고수들의 노하우</h1>
        <TipWrap>
    {knowhows.map(knowhow => {
      if(knowhow.id==1){
      return(
        <TipMain>
         <div style={{ 
        backgroundImage: `url(${knowhow.coverImageUrl})` ,
        backgroundRepeat: 'no-repeat',
        width:'600px',
        height:'100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        color: '#fff',

      }}>
      
            <div className='text'>
              <p>{knowhow.name}</p>
              <p className='bold'>{knowhow.service.service_name}</p>
              <p>{knowhow.pro.name}</p>  
            </div>
            </div>
          </TipMain>
      
    
        // <container>
        //    <p>{knowhow.name}</p>
              
        //       <p>{knowhow.service.service_name}</p>
        //       <p>{knowhow.pro.name}</p>
        //       <img src={knowhow.coverImageUrl}  /> 
        //       </container>    
               )
      }
      else{
        
        return(
          <TipSub>
             <Tip
               
               topic={knowhow.name}
               title={knowhow.service.service_name}
               author={knowhow.pro.name}
               img={knowhow.coverImageUrl}
             />
              </TipSub>
        )
       
      }

          })} 
      {/* <Container>
        <h1>고수들의 노하우</h1>
        
        <TipWrap>
        
          <TipMain>
            <div className='text'>
              <p>{knowhow.name}</p>
              <p className='bold'>배우자 외도로 인한 이혼 소송 절차</p>
              <p>조건한법률사무소</p>  
            </div>
          </TipMain>
    
          <TipSub>
            <Tip
               
              topic={knowhow.name}
              title="마케팅, 왜 의뢰 하는가?"
              author="권성수 광고 디렉터 브랜딩 전문가"
              img={knowhow.coverImageUrl}
            />
     
            <Tip
              topic="종합 광고 대행"
              title="마케팅, 왜 의뢰 하는가?"
              author="권성수 광고 디렉터 브랜딩 전문가"
              img="https://static.cdn.soomgo.com/upload/talkboard/ca970284-077c-4061-bfc7-c58e2e5fbd50.jpg"
            />
            <Tip
              topic="종합 광고 대행"
              title="마케팅, 왜 의뢰 하는가?"
              author="권성수 광고 디렉터 브랜딩 전문가"
              img="https://static.cdn.soomgo.com/upload/talkboard/ca970284-077c-4061-bfc7-c58e2e5fbd50.jpg"
            />
          </TipSub>
        </TipWrap>
       
      </Container> */}
      </TipWrap>
       </Container> 
    </>
  )
}

export default Knowhow

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 80px auto;
  
`;

const TipWrap = styledComponents.div`
  display:grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
`;

// const ImageBackground = styledComponents .ImageBackground`
// background-repeat: no-repeat;
// background-size: cover;
// background-position: center;
// border-radius: 10px;
// color: #fff;

// `;

const TipMain = styledComponents.div`
  // background-image: url("https://static.cdn.soomgo.com/upload/talkboard/87edd147-4481-42fe-871c-7545db3b958e.jpg");
  
    // background-image: url(image);
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
  // border-radius: 10px;
  // color: #fff;

  .text{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding: 20px;

    p{
      margin-bottom: 20px;
      font-size: 18px;
    }

    .bold{
      font-size: 20px;
    }
  }
`;

const TipSub = styledComponents.div`
position: relative;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 20px; 
   
`;