import React from "react";

function Products(props) {
  const handleClick = () => {
    props.addProductToOrder(props.item);
  };

  return (
    <div className={props.squareClassName}>
      <button type="submit" onClick={handleClick} className={props.itemClassName}>
        <p className={props.productClassName} id={props.productNameId}>{props.item.name}</p>
        <p className={props.productClassName} id={props.productPriceId}>$ {props.item.price}</p>
      </button>
    </div>
  );
}

export default Products;
