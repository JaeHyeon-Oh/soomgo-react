import React from 'react';
import styledComponents from 'styled-components';
// import CoPresentIcon from '../images/soomgoLogo'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Link to="/">
          <Logo>
           <img
              alt='숨고 로고'
              src='https://static.cdn.soomgo.com/static/img/home/index_soomgo_logo.svg'
           />
          </Logo>  
        </Link>
        <Keyword>
          <div id='keyword' contentEditable='true'>
            <img
              alt='키워드'
              src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiIHN0cm9rZT0iI0I1QjVCNSIgc3Ryb2tlLXdpZHRoPSIxLjYiPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGN4PSI2LjUiIGN5PSI2LjUiIHI9IjYuNSIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Im0xMS41IDExLjUgNSA1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K'
           />
          <input type="text" placeholder='어떤 서비스가 필요하세요?'/>
          </div>
        </Keyword>
        <Menu>
          <Link style={{ textDecoration: 'none' }} to="/search/pro">
            <li href='#'>고수찾기</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/buy">
            <li href='#'>바로구매</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/login">
            <li href='#'>로그인</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/sign-up">
            <li href='#'>회원가입</li>
          </Link>
        </Menu>
        <Button>
        <Link to="/pro" >
          <button> 고수가입</button>
        </Link>
        </Button>
      </Container>
    </Nav>
  )
}

export default Navbar

const Nav = styledComponents.div`
  background-color: white;
  color: #fff;
  height: 70px;
`;

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const Logo = styledComponents.div`
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  align-items: center;
  color: #fff;
  img{
    height:35px;
    margin-left: 10px;
  }
`;
const Keyword = styledComponents.div`
  img{
    height:20px;
    margin-left: 10px;
  }
  div{
    font-size: 1rem;
    color:gray;
    margin: 0 auto;
    box-sizing: border-box

}
div:focus{
  outline:2px solid #00c7ae;
}
`;

const Menu = styledComponents.ul`
  
  display: flex;
  list-style: none;
  li{
    font-size: 1rem;
    margin-right: 20px;
    padding-bottom: 5px;
    color: black;
  }
  li:hover{
    // border-bottom: 2px solid #fff;
    font-weight: bold;
  }
`;

const Button = styledComponents.button`
  display: flex;
  button{
    font-size: 1rem;
    // margin-right: 20px;
    // padding-bottom: 5px;
    color: white;
    background-color:#00c7ae;
  }
  button:hover{
    // border-bottom: 2px solid #fff;
    font-weight: bold;
  }
`;