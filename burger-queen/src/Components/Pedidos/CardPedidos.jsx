import React, { useState, useEffect } from 'react';
import { showOrders } from '../../API/orders';
import { format } from 'date-fns';
import Btn from '../Btn/Btn';

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
                  Mesa: {pedido.table}
                </p>
                <p className='info'>Cliente: {pedido.client}</p>
                <p className='info'>Data: {format(new Date(pedido.dataEntry), 'dd/MM/yyyy HH:mm', { timeZone: 'America/Sao_Paulo' })}</p>
                <p className='info'>Total: ${pedido.products.reduce((total, product) => total + (product.price * product.quantity), 0)}</p>
                <div className='infoPedidos'>
                  {pedido.products.map((product) => (
                    <p key={product.id}>{product.name}</p>
                  ))}
                </div>
                
                <div className="prepararBtn">
                  <Btn
                    buttonClassName="btnPreparar"
                    btnTextClassName="btnTextPreparar"
                    id="principal"
                    text="Preparar"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
    

}

export default CardPedidos;


