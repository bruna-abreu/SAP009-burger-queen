import CardPedidos from "./CardPedidos";
import Btn from "../Btn/Btn";
import "./Pedidos.css"

function Cozinha() {
    return (
      <>
      <div className="pedidosBtn">
        <Btn
            buttonClassName="btnPedidos"
            btnTextClassName="btnTextNaCozinha"
            id="btnNaCozinha"
            text="Pendentes"
        />
        <Btn
            buttonClassName="btnPedidos"
            btnTextClassName="btnTextProntos"
            id="btnProntos"
            text="Em preparo"
        />
        <Btn
            buttonClassName="btnPedidos"
            btnTextClassName="btnTextEntregues"
            id="btnEntregues"
            text="Prontos"
        />
      </div>
        <CardPedidos
            divPaiClassName="cardsPedidos"
            divFilhoClassName="card"
            paragrafoStatusClassName="paragrafoStatus"
            paragrafoMesaClassName="paragrafoMesa"
            /* statusId="statusPedidos"
            mesaId="mesaPedidos" */
        />
      </>
    );
  }

export default Cozinha