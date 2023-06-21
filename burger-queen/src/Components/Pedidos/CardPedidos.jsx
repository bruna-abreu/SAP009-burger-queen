import React, { useState, useEffect } from 'react';
import { showOrders } from '../../API/orders';

function CardPedidos(props) {
  const token = localStorage.getItem('token');
  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    const listOrders = async () => {
      const orders = await showOrders(token)
      setPedidos(orders)
      console.log(pedidos, orders)
    }
    listOrders()
  },[])

  return (
    <>
     {!pedidos ? (<p>Não carregou</p>):
     pedidos.map((pedido) => (
        <div className={props.divPaiClassName}>
          <div className={props.divFilhoClassName}>
            <p className={props.paragrafoStatusClassName} id={props.statusId}>  
             {pedido.status}
            </p>
            <p className={props.paragrafoMesaClassName}id={props.mesaId}> 
              {pedido.table} 
            </p>
          </div>
          <div className="details">
            <details className='verMais'>
            <summary class='view-description'>Ver mais</summary>
              <div className="descricaoPedidos">
                <div className="detalhesPedidos">
                  <p>{pedido.dataEntry}</p>
                  <p>{pedido.client}</p>
                  <p>teste</p>
                  {pedido.products.map((product) => (
                    <p>{product.name}</p>
                  ))}
                </div>
                
              </div>
          </details>
          </div>
          
        </div>
      ))
          
    }
  </>
  );
}

export default CardPedidos;
