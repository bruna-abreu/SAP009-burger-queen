import React from 'react';
import './Cardapio.css';


function ProductsBox({ enviarPedidos, orderSummary, removeProductFromOrder, increaseProductQuantity, decreaseProductQuantity }) {
  return (
    <section className='pedidos'>
      <div className="resumoPedido">
        <p className="resumo">Resumo do pedido</p>
      </div>
        {orderSummary.map((product) => (
          <div key={product.id} className="pedido">
            <div className="divMae">
              <div className='productName'>
                {product.name}
              </div>
              <section className='productPrice'>
                <p className="priceTeste">${product.price * product.quantity}</p>
                <button className="btnExcluirPedido" onClick={() => removeProductFromOrder(product.id)}>Excluir</button>
              </section>
              </div>
              <div className="quantidade-botoes">
                <button className="mais" onClick={() => increaseProductQuantity(product.id)}>+</button>
                <span className="quantidade">{product.quantity}</span>
                <button className="menos" onClick={() => decreaseProductQuantity(product.id)}>-</button>
            </div>

          </div>
        ))}
      <div className='total'>
        <p>Total: </p>
        <p className='valorTotal'>
        ${orderSummary.reduce((total, product) => total + (product.price * product.quantity), 0)}
        </p>
      </div>
      <div className="enviarPedidos">
        <button onClick={() => enviarPedidos()} className="enviarPedidosBtn">Enviar para a cozinha</button>
      </div>
    </section>
  );
}

export default ProductsBox;


