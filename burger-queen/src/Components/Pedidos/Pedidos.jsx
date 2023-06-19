import CardPedidos from "./CardPedidos";
import Btn from "../Btn/Btn";
import "./Pedidos.css"

function Pedidos() {
    return (
      <>
      <div className="pedidosBtn">
        <Btn
            buttonClassName="btnPedidos"
            btnTextClassName="btnTextNaCozinha"
            id="btnNaCozinha"
            text="Na Cozinha"
        />
        <Btn
            buttonClassName="btnPedidos"
            btnTextClassName="btnTextProntos"
            id="btnProntos"
            text="Prontos para entrega"
        />
        <Btn
            buttonClassName="btnPedidos"
            btnTextClassName="btnTextEntregues"
            id="btnEntregues"
            text="Pedidos entregues"
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

export default Pedidos