import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styledComponents from 'styled-components'

import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://3.39.83.84:8000/category/?format=json')
            .then(response => {
              setCategories(response.data);
            });
    }, []);
  return (
    <FilterIConsWrap>
      <div className='container'>
      {categories.map(category => {
        return(
        <Link to="/search/pro/{category.first_category_name}" className='icon'>
          <container>
          <img src={category.first_category_url} fontSize='inherit' htmlColor='#000000' />
          <p>{category.first_category_name}</p>
         </container>
        </Link>
        )
          })}
      
        
      
      </div>
    </FilterIConsWrap>
  )
}

export default Category;

const FilterIConsWrap = styledComponents.div`
  height: 1rem;
  background-color: #fff;
  margin-bottom: 50px;
  max-width: 1200px;
  margin: 40px auto;

  .container{
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    height: 100%;

    .img{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      cursor: pointer;
      transition: all .15s ease-in;
    }

    .img:hover{
      background-color: #fff;
    }

    p{
      margin-top: 10px;
      font-size: 15px;
    }
  }
`;