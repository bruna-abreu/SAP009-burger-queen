import React, { useState } from 'react';
import CardPedidos from './CardPedidos';
import Btn from '../Btn/Btn';
import './Pedidos.css';

function Cozinha() {
  const [botaoAtivo, setBotaoAtivo] = useState('Pendente'); 
  const handleBotaoAtivo = (status) => {
    setBotaoAtivo(status); 
  };

  return (
    <>
      <div className="pedidosBtn">
        <Btn
          buttonClassName={`btnPedidos ${botaoAtivo === 'Pendente' ? 'ativo' : ''}`}
          btnTextClassName={`btnTextNaCozinha ${botaoAtivo === 'Pendente' ? 'laranja' : ''}`}
          id="btnNaCozinha"
          text="Pendente"
          onClick={() => handleBotaoAtivo('Pendente')} 
        />
        <Btn
          buttonClassName={`btnPedidos ${botaoAtivo === 'Em preparo' ? 'ativo' : ''}`}
          btnTextClassName={`btnTextProntos ${botaoAtivo === 'Em preparo' ? 'laranja' : ''}`}
          id="btnProntos"
          text="Em preparo"
          onClick={() => handleBotaoAtivo('Em preparo')} 
        />
        <Btn
          buttonClassName={`btnPedidos ${botaoAtivo === 'Prontos' ? 'ativo' : ''}`}
          btnTextClassName={`btnTextEntregues ${botaoAtivo === 'Prontos' ? 'laranja' : ''}`}
          id="btnEntregues"
          text="Prontos"
          onClick={() => handleBotaoAtivo('Prontos')} 
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

export default Cozinha;
