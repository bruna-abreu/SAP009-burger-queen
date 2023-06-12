// import React from "react";

// function Products(props) {
//   const handleClick = () => {
//     props.addProductToOrder(props.item);
//   };

//   return (
//     <div className={props.squareClassName}>
//       <button type="submit" onClick={handleClick} className={props.itemClassName}>
//         <p className={props.productClassName} id={props.productNameId}>{props.item.name}</p>
//         <p className={props.productClassName} id={props.productPriceId}>$ {props.item.price}</p>
//       </button>
//     </div>
//   );
// }

// export default Products;

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


