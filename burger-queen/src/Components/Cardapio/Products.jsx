import React from 'react';

export default function Products({ item, addProductToOrder }) {
  const handleClick = () => {
    addProductToOrder(item);
  };
  return (
    <div className="squareProducts">
      <button type="submit" onClick={handleClick} className="productsBtn">
        <p className="productsInfo" id="productName">{item.name}</p>
        <p className="productsInfo" id="productPrice">$ {item.price}</p>
      </button>
    </div>
  );
}


