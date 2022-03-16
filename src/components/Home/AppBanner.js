import React from 'react'
import styledComponents from 'styled-components'

const Knowhow = () => {
  return (
    <>
      <Container>
            <Button>
                <button >숨고 앱으로 더 편하게 고수를 찾아보세요</button>
            </Button>
      </Container>
    </>
  )
}

export default Knowhow

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 80px auto;
`;


const Button = styledComponents.div`
button{
  display: grid;
  font-size:20px;
  font-weight:bold;
  border-radius: 10%;
  // grid-template-columns: 3fr 1fr;
  height: 200%;
  width:1200px;
  heigth:150px;
}
`;

