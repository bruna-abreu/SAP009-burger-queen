import React, { useState, useEffect } from 'react';
import { showOrders } from '../../API/orders';

function CardPedidos(props) {
  const token = localStorage.getItem('token');
  const [pedidos, setPedidos] = useState()
  useEffect(() => {
    const orders = showOrders(token)
    setPedidos(orders)
    console.log(pedidos)
  },[])

  return (
    <>
     {!pedidos ? (<>Não carregou</>): (
          <div className={props.divPaiClassName}>
          <div className={props.divFilhoClassName}>
            <p className={props.paragrafoStatusClassName} id={props.statusId}>  
            {/* {props.status} */}
            Na cozinha
            </p>
            <p className={props.paragrafoMesaClassName}id={props.mesaId}> 
            {/* {props.selecValue} */}
            Mesa: 5
            </p>
          </div>
          <div className="details">
            <details className='verMais'>
            <summary class='view-description'>Ver mais</summary>
              <div className="descricaoPedidos">
                <div className="detalhesPedidos">
                  <p>{pedidos.dataEntry}</p>
                  <p>teste</p>
                  <p>teste</p>
                  <p>teste</p>
                  <p>teste</p>
                </div>
                
              </div>
          </details>
          </div>
          
        </div>
     )}
 
    </>
  );
}

export default CardPedidos;
