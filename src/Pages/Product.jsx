import React, { useContext } from 'react';
import ShopContext from '../Context/Context';
import { useParams } from 'react-router-dom';
 
function Product() {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div>Product</div>
  );
};

export default Product;