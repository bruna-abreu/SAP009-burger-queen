import CustomButton from '../Components/Btn/Btn.jsx'
import '../Components/Btn/Btn.css'

function HomePage() {
    return (
        <div className="container">
           <div className="homeBtn"> 
              <CustomButton
                className="customBtn"
                id="cardapio"
                text="CARDÁPIO"
                image="caminho/para/imagem.jpg"
                path="/Cardapio"
                />
              <CustomButton
                className="customBtn"
                id="pedidos"
                text="PEDIDOS"
                image="caminho/para/imagem.jpg"
                /*path="/outra-pagina"*/
            />
        </div> 
        </div>
        
       
    )
}

export default HomePage