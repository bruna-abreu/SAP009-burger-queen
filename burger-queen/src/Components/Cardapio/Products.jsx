function Products(props) {
    return (
        <div className={props.squareClassName}>
            <button type="submit" onClick={props.onClick} className={props.itemClassName}>
                <p className={props.productClassName} id={props.productNameId}>{props.item}</p>
                <p className={props.productClassName} id={props.productPriceId}>$ {props.price}</p>
            </button>
        </div>
      );
}
export default Products;