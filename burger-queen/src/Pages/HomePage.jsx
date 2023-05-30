import Btn from '../Components/Btn/Btn.jsx'
import '../Components/Btn/Btn.css'
import cardapioImage from '../Assets/cardapio-btn.png';
import pedidosImage from '../Assets/pedidos-btn.svg'
import ImgHome from '../Components/Home/ImgHome.jsx';


function HomePage() {
    return (
        <div className="container">
           <div className="homeBtn"> 
              <Btn
                buttonClassName="customBtn"
                imageClassName="btnImage"
                id="cardapio"
                text="CARDÁPIO"
                image={cardapioImage}
                path="/Cardapio"
                />
              <Btn
                buttonClassName="customBtn"
                imageClassName="btnImage"
                id="pedidos"
                text="PEDIDOS"
                image={pedidosImage}
                /*path="/outra-pagina"*/
            />
        </div> 
          <ImgHome />
        </div>
        
       
    )
}

export default HomePage