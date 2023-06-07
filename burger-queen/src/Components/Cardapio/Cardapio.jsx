import { useState, useEffect } from "react";
import Btn from '../Btn/Btn'
import Input from '../Input/Input'
import Products from "./Products";
import ProductsBox from "./ProductsBox";
import getProducts from "../../API/menuProducts"
import './Cardapio.css'

function Cardapio() {
  const [cliente, setCliente] = useState('')
  const [mesa, setMesa] = useState('')
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeBtn, setActiveBtn] = useState('cafeDaManha')
  const [orderSummary, setOrderSummary] = useState([])

  useEffect(() => {
    async function listProducts() {
      const productsList = await getProducts()
      setProducts(productsList)

      // Filtrar os produtos do café da manhã
      const cafeDaManhaProducts = productsList.filter(product => product.type === 'Café da manhã')
      setFilteredProducts(cafeDaManhaProducts)
    }
    listProducts()
  }, [])

  useEffect(() => {
    // Atualizar os produtos filtrados quando o botão ativo for alterado
    if (activeBtn === 'cafeDaManha') {
      const cafeDaManhaProducts = products.filter(product => product.type === 'Café da manhã')
      setFilteredProducts(cafeDaManhaProducts)
    } else if (activeBtn === 'principal') {
      const principalProducts = products.filter(product => product.type === 'Principal')
      setFilteredProducts(principalProducts)
    }
  }, [activeBtn, products])

  // Adicionar um produto ao resumo do pedido
  const addProductToOrder = (product) => {
    setOrderSummary(prevOrder => [...prevOrder, product])
  }

  // Remover um produto do resumo do pedido
  const removeProductFromOrder = (product) => {
    setOrderSummary(prevOrder => prevOrder.filter(item => item.id !== product.id))
  }

  return (
    <>
      <div className="btnCardapio">
        <Btn
          buttonClassName={`cafeDaManhaBtn ${activeBtn === 'cafeDaManha' ? 'active' : ''}`}
          btnTextClassName="btnTextCardapio"
          id="cafeDaManha"
          text="CAFÉ DA MANHÃ"
          path="/Cardapio"
          onClick={() => setActiveBtn('cafeDaManha')}
        />  
        <Btn
          buttonClassName={`principalBtn ${activeBtn === 'principal' ? 'active' : ''}`}
          btnTextClassName="btnTextCardapio"
          id="principal"
          text="PRINCIPAL"
          path="/Cardapio"
          onClick={() => setActiveBtn('principal')}
        />
      </div>
      <div className="inputCardapio"> 
        <Input
          value={cliente}
          whenChanged={(value) => setCliente(value)}  
          type="text"
          id="inputCliente"
          placeholder="Nome do cliente"
          className="inputsCardapio"
        />
        <Input
          value={mesa}
          whenChanged={(value) => setMesa(value)}
          type="number"
          id="inputMesa"
          placeholder="N° da mesa"
          className="inputsCardapio"
        />
      </div>
      <div className="containerCardapio">
        <div className="teste">
          <div className="productsCardapio">
            {filteredProducts.map((product) => (
                <Products
                key={product.id}
                squareClassName="squareProducts"
                itemClassName="productsBtn"
                productClassName="productsInfo"
                productNameId="productName"
                productPriceId="productPrice"
                item={product}
                addProductToOrder={addProductToOrder}
              />
            ))}
          </div>
        </div>
          <section>
            <ProductsBox
              products={filteredProducts}
              orderSummary={orderSummary}
              removeProductFromOrder={removeProductFromOrder}
            />
          </section>
       </div>
      
      </>
    );
  }
  
  export default Cardapio;
  