import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './SearchPro.css'
import SearchIcon from '@material-ui/icons/Search'
import { Link, useParams } from 'react-router-dom'


  
function SearchPro() {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        axios.get('http://3.39.83.84:8000/gosufind/?format=json')
            .then(response => {
                setSearchData(response.data);
            });
    }, []);


  return (
    <div className='main'>
      <h1><a href="/search/pro">고수찾기</a></h1>
      <div className="container">
        <div className="linkbox">
          <Link to="/">숨고 &gt; </Link>
          <a href="/search/pro">지역,카테고리</a>
        </div>
       
       
        {searchData.map(item => (
       
          <img src={item.item_img}/>
        
        ))}
      </div>
    </div>
  )
}

export default SearchPro;