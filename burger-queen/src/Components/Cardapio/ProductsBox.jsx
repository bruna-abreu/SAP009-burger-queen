import React from 'react';
import './Cardapio.css';

function ProductsBox({ orderSummary, removeProductFromOrder, increaseProductQuantity, decreaseProductQuantity }) {
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
        <button className="enviarPedidosBtn">Enviar para a cozinha</button>
      </div>
    </section>
  );
}

export default ProductsBox;



// import Btn from '../Btn/Btn'
// import './Cardapio.css'

// // export default function ProductsBox () {
// //     return (
// //         <section className="pedidos">
// //           <div className="resumoPedido">
// //             <p className="resumo">Resumo do pedido</p>
// //           </div>
// //           <div className="enviarPedidos">
// //               <Btn
// //                 buttonClassName="enviarPedidosBtn"
// //                 btnTextClassName="btnTextoEnviarPedidos"
// //                 text="Enviar para a cozinha"
// //               //path="/"
// //               /> 
// //           </div>
// //         </section>
// //     )
// // }

// export default function ProductsBox({ products, orderSummary, removeProductFromOrder }) {
//   return (
//     <section className="pedidos">
//       <div className="resumoPedido">
//         <p className="resumo">Resumo do pedido</p>
//         <ul className='ulPedidos'>
//           {orderSummary.map((product) => (
//             <li className='liPedidos' key={product.id}>
//             <div className='divMae'>
//               <div className='productName'>
//                 {product.name}
//               </div>
//               <section className='productPrice'>
//                 <span className='priceTeste'>${product.price}</span>
//                 <button className='btnExcluirPedido' onClick={() => removeProductFromOrder(product)}>Excluir</button>
//               </section>
//             </div>
              
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="enviarPedidos">
//         <Btn
//           buttonClassName="enviarPedidosBtn"
//           btnTextClassName="btnTextoEnviarPedidos"
//           text="Enviar para a cozinha"
//           //path="/"
//         /> 
//       </div>
//     </section>
//   )
// }