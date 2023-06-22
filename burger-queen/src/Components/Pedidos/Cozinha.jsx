// import CardPedidos from "./CardPedidos";
// import Btn from "../Btn/Btn";
// import "./Pedidos.css"

// function Cozinha() {
//     return (
//       <>
//       <div className="pedidosBtn">
//         <Btn
//             buttonClassName="btnPedidos"
//             btnTextClassName="btnTextNaCozinha"
//             id="btnNaCozinha"
//             text="Pendentes"
//         />
//         <Btn
//             buttonClassName="btnPedidos"
//             btnTextClassName="btnTextProntos"
//             id="btnProntos"
//             text="Em preparo"
//         />
//         <Btn
//             buttonClassName="btnPedidos"
//             btnTextClassName="btnTextEntregues"
//             id="btnEntregues"
//             text="Prontos"
//         />
//       </div>
//         <CardPedidos
//             divPaiClassName="cardsPedidos"
//             divFilhoClassName="card"
//             paragrafoStatusClassName="paragrafoStatus"
//             paragrafoMesaClassName="paragrafoMesa"
//             /* statusId="statusPedidos"
//             mesaId="mesaPedidos" */
//         />
//       </>
//     );
//   }

// export default Cozinha

// import React, { useState } from 'react';
// import CardPedidos from './CardPedidos';
// import Btn from '../Btn/Btn';
// import './Pedidos.css';

// function Cozinha() {
//   const [botaoAtivo, setBotaoAtivo] = useState('Pendentes');

//   const handleBotaoAtivo = (status) => {
//     setBotaoAtivo(status);
//   };

//   return (
//     <>
//       <div className="pedidosBtn">
//         <Btn
//           buttonClassName={`btnPedidos ${botaoAtivo === 'Pendentes' ? 'ativo' : ''}`}
//           btnTextClassName={`btnTextNaCozinha ${botaoAtivo === 'Pendentes' ? 'laranja' : ''}`}
//           id="btnNaCozinha"
//           text="Pendentes"
//           onClick={() => handleBotaoAtivo('Pendentes')}
//         />
//         <Btn
//           buttonClassName={`btnPedidos ${botaoAtivo === 'Em preparo' ? 'ativo' : ''}`}
//           btnTextClassName={`btnTextProntos ${botaoAtivo === 'Em preparo' ? 'laranja' : ''}`}
//           id="btnProntos"
//           text="Em preparo"
//           onClick={() => handleBotaoAtivo('Em preparo')}
//         />
//         <Btn
//           buttonClassName={`btnPedidos ${botaoAtivo === 'Prontos' ? 'ativo' : ''}`}
//           btnTextClassName={`btnTextEntregues ${botaoAtivo === 'Prontos' ? 'laranja' : ''}`}
//           id="btnEntregues"
//           text="Prontos"
//           onClick={() => handleBotaoAtivo('Prontos')}
//         />
//       </div>
//       <CardPedidos
//         divPaiClassName="cardsPedidos"
//         divFilhoClassName="card"
//         paragrafoStatusClassName="paragrafoStatus"
//         paragrafoMesaClassName="paragrafoMesa"
//         statusId="statusPedidos"
//         mesaId="mesaPedidos"
//         statusAtivo={botaoAtivo}
//       />
//     </>
//   );
// }

// export default Cozinha;

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

