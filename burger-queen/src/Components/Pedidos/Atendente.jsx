import React, { useState } from 'react';
import CardPedidos from './CardPedidos';
import Btn from '../Btn/Btn';
import './Pedidos.css';

function Atendente() {
  const [botaoAtivo, setBotaoAtivo] = useState('Prontos para entrega');

  const handleBotaoAtivo = (status) => {
    setBotaoAtivo(status);
  };

  return (
    <>
      <div className="pedidosAtendenteBtn">
        <Btn
          buttonClassName={`btnAtendentePedidos ${botaoAtivo === 'Prontos para entrega' ? 'ativo' : ''}`}
          btnTextClassName={`btnTextProntoEntrega ${botaoAtivo === 'Prontos para entrega' ? 'laranja' : ''}`}
          id="btnProntoEntrega"
          text="Prontos para entrega"
          onClick={() => handleBotaoAtivo('Prontos para entrega')}
        />
        <Btn
          buttonClassName={`btnAtendentePedidos ${botaoAtivo === 'Pedidos entregues' ? 'ativo' : ''}`}
          btnTextClassName={`btnTextPedidosEntregues ${botaoAtivo === 'Pedidos entregues' ? 'laranja' : ''}`}
          id="btnPedidosEntregues"
          text="Pedidos entregues"
          onClick={() => handleBotaoAtivo('Pedidos entregues')}
        />
      </div>
      <CardPedidos
        divPaiClassName="cardsPedidos"
        divFilhoClassName="card"
        paragrafoStatusClassName="paragrafoStatus"
        paragrafoMesaClassName="paragrafoMesa"
        statusId="statusPedidos"
        mesaId="mesaPedidos"
        statusAtivo={botaoAtivo}
      />
    </>
  );
}

export default Atendente;

