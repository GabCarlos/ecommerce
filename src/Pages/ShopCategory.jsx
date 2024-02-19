import React from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ShopCategory() {
  
  const [imageData, setImageData] = useState([]);

  useEffect(()=> {
    async function fecthImage(){
      try{
        const response = await axios.get(``); 
        setImageData(response.data);
      }
      catch(error){
        console.error('Erro da API', error);
      }
    }
    fecthImage();
  }, []);

  return (
    <div className='ShopCategory'>
      <img className='shopcategory-banner' src='' alt=''/>
      <div className='shopcategory-indexSort'>
        <p>
          <span> Showing 1-12 </span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
       <div className='shopcategory-products'> 
       {imageData.map((imagem, index) => (
  <img key={index} src={imagem.url} alt={`imagem ${index}`} />
))}
       </div>
      <div className='shopcategory-loadmore'>
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;