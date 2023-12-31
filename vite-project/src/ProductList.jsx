import React from 'react';
import './ProductList.css'; 

const ProductList = ({data}) => {

  return (
    <div className="product-list">
      
      <table>
        <thead>
          <tr>
          <th>S. No</th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
         {data.map((item,index) =>(
          <ProductRow  title={item.title} price={item.price} popularity={item.popularity} s_no={index}/>
         ))}
        </tbody>
      </table>
    </div>
  );
};

const ProductRow = ({ title, price, popularity,s_no }) => {
  return (
    <tr>
      <td>{s_no+1}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{popularity}</td>
    </tr>
  );
};

export default ProductList;
