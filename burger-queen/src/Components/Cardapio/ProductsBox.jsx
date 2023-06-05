import Btn from '../Btn/Btn'
import './Cardapio.css'

export default function ProductsBox () {
    return (
        <section className="pedidos">
          <div className="resumoPedido">
            <p className="resumo">Resumo do pedido</p>
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