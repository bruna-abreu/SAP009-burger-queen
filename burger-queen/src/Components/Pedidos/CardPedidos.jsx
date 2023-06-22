
// import React, { useState, useEffect } from 'react';
// import { showOrders } from '../../API/orders';

// function CardPedidos(props) {
//   const token = localStorage.getItem('token');
//   const [pedidos, setPedidos] = useState([]);
//   const [pedidosFiltrados, setPedidosFiltrados] = useState([]);

//   useEffect(() => {
//     const listOrders = async () => {
//       const orders = await showOrders(token);
//       setPedidos(orders);
//     };
//     listOrders();
//   }, [token]);

//   useEffect(() => {
//     const filtrarPedidos = () => {
//       setPedidosFiltrados(pedidos.filter((pedido) => pedido.status === props.statusAtivo));
//     };
//     filtrarPedidos();
//   }, [pedidos, props.statusAtivo]);

//   return (
//     <>
//       {!pedidos ? (
//         <p>Não carregou</p>
//       ) : (
//         pedidosFiltrados.map((pedido) => (
//           <div className={props.divPaiClassName} key={pedido.id}>
//             <div className={props.divFilhoClassName}>
//               <p className={props.paragrafoStatusClassName} id={props.statusId}>
//                 {pedido.status}
//               </p>
//               <p className={props.paragrafoMesaClassName} id={props.mesaId}>
//                 {pedido.table}
//               </p>
//             </div>
//             <div className="details">
//               <details className="verMais">
//                 <summary className="view-description">Ver mais</summary>
//                 <div className="descricaoPedidos">
//                   <div className="detalhesPedidos">
//                     <p>{pedido.dataEntry}</p>
//                     <p>{pedido.client}</p>
//                     <p>teste</p>
//                     {pedido.products.map((product) => (
//                       <p key={product.id}>{product.name}</p>
//                     ))}
//                   </div>
//                 </div>
//               </details>
//             </div>
//           </div>
//         ))
//       )}
//     </>
//   );
// }

// export default CardPedidos;


import React, { useState, useEffect } from 'react';
import { showOrders } from '../../API/orders';

function CardPedidos(props) {
  const token = localStorage.getItem('token');
  const [pedidos, setPedidos] = useState([]);
  const [pedidosFiltrados, setPedidosFiltrados] = useState([]);

  useEffect(() => {
    const listOrders = async () => {
      const orders = await showOrders(token);
      setPedidos(orders);
    };
    listOrders();
  }, [token]);

  useEffect(() => {
    const filtrarPedidos = () => {
      setPedidosFiltrados(pedidos.filter((pedido) => pedido.status === props.statusAtivo));
    };
    filtrarPedidos();
  }, [pedidos, props.statusAtivo]);

  return (
    <div className='funciona'>
      {!pedidos ? (
        <p>Não carregou</p>
      ) : (
        pedidosFiltrados.map((pedido) => (
          <div className={props.divPaiClassName} key={pedido.id}>
            <div className={props.divFilhoClassName}>
              <p className={props.paragrafoStatusClassName} id={props.statusId}>
                {pedido.status}
              </p>
              <p className={props.paragrafoMesaClassName} id={props.mesaId}>
                {pedido.table}
              </p>
              <p className='info'>{pedido.dataEntry}
              </p>
              <p className='info'>{pedido.client}</p>
              {pedido.products.map((product) => (
              <p className='info' key={product.id}>{product.name}</p>
            ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CardPedidos;


