import { useState } from "react";
import Btn from '../Btn/Btn'
import Input from '../Input/Input'
import Products from "./Products";
import ProductsBox from "./ProductsBox";
import './Cardapio.css'

function Cardapio() {
  const [cliente, setCliente] = useState('')
  const [mesa, setMesa] = useState('')
    return (
      <>
        <div className="btnCardapio">
          <Btn
            buttonClassName="cafeDaManhaBtn"
            btnTextClassName="btnTextCardapio"
            id="cafeDaManha"
            text="CAFÉ DA MANHÃ"
            path="/Cardapio"
          />  
          <Btn
            buttonClassName="principalBtn"
            btnTextClassName="btnTextCardapio"
            id="principal"
            text="PRINCIPAL"
            path="/Cardapio"
          />
        </div>
        <div className="inputCardapio"> 
          <Input
            value= {cliente}
            whenChanged= {(value) => setCliente(value)}  
            type= 'text'
            id= 'inputCliente'
            placeholder= 'Nome do cliente'
            className= 'inputsCardapio'
          />
          <Input
            value= {mesa}
            whenChanged= {(value) => setMesa(value)}
            type= 'number'
            id= 'inputMesa'
            placeholder= 'N° da mesa'
            className= 'inputsCardapio'
          />
        </div>
        <div class='productsCardapio'>
          <Products
            squareClassName= 'squareProducts'
            itemClassName= 'productsBtn'
            productClassName= 'productsInfo'
            productNameId= 'productName'
            productPriceId= 'productPrice'
            item= 'teste'
          />
        </div>
        <section>
          <ProductsBox/>
        </section>
        
      </>
    );
  }

export default Cardapio