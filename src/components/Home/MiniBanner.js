import React from 'react'
import styledComponents from 'styled-components'
import Tip from './Item/Tip'

const Knowhow = () => {
  return (
    <>
      <Container>
        <TipWrap>
          
            <Button>
                <button >VOD 숨고클래스</button>
            </Button>
            <Button><button>
                서비스상품
                바로구매
            </button>
            </Button>
      
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
  display: grid;
  // gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
`;
const Button = styledComponents.div`
button{
  display: grid;
  font-size:20px;
  // grid-template-columns: 3fr 1fr;
  height: 200%;
  width:600px;
}
`;

const TipSub = styledComponents.div`
  display: flex;
  grid-template-rows: repeat(3, 2fr);
  gap: 100px;  
`;