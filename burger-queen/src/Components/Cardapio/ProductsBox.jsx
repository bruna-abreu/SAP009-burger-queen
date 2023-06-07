import Btn from '../Btn/Btn'
import './Cardapio.css'

// export default function ProductsBox () {
//     return (
//         <section className="pedidos">
//           <div className="resumoPedido">
//             <p className="resumo">Resumo do pedido</p>
//           </div>
//           <div className="enviarPedidos">
//               <Btn
//                 buttonClassName="enviarPedidosBtn"
//                 btnTextClassName="btnTextoEnviarPedidos"
//                 text="Enviar para a cozinha"
//               //path="/"
//               /> 
//           </div>
//         </section>
//     )
// }

export default function ProductsBox({ products, orderSummary, removeProductFromOrder }) {
  return (
    <section className="pedidos">
      <div className="resumoPedido">
        <p className="resumo">Resumo do pedido</p>
        <ul className='ulPedidos'>
          {orderSummary.map((product) => (
            <li className='liPedidos' key={product.id}>
            <div className='divMae'>
              <div className='productName'>
                {product.name}
              </div>
              <section className='productPrice'>
                <span>${product.price}</span>
                <button className='btnExcluirPedido' onClick={() => removeProductFromOrder(product)}>Excluir</button>
              </section>
            </div>
              
            </li>
          ))}
        </ul>
      </div>
      <div className="enviarPedidos">
        <Btn
          buttonClassName="enviarPedidosBtn"
          btnTextClassName="btnTextoEnviarPedidos"
          text="Enviar para a cozinha"
          //path="/"
        /> 
      </div>
    </section>
  )
}