import React, { useState, useEffect } from 'react';
import Btn from '../Btn/Btn';
import Input from '../Input/Input';
import Products from './Products';
import ProductsBox from './ProductsBox';
import getProducts from '../../API/menuProducts';
import {createOrder} from '../../API/orders';
import ReactModal from 'react-modal';
import './Cardapio.css';

function Cardapio() {
  const [cliente, setCliente] = useState('');
  const [mesa, setMesa] = useState(''); 
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [activeBtn, setActiveBtn] = useState('cafeDaManha'); 
  const [orderSummary, setOrderSummary] = useState([]); 
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => { 
    async function listProducts() {
      const productsList = await getProducts(); 
      setProducts(productsList); 
      const cafeDaManhaProducts = productsList.filter(
        (product) => product.type === 'Café da manhã'
      );
      setFilteredProducts(cafeDaManhaProducts); 
    }
    listProducts(); 
  }, []);

  useEffect(() => {
    if (activeBtn === 'cafeDaManha') {
      const cafeDaManhaProducts = products.filter(
        (product) => product.type === 'Café da manhã'
      );
      setFilteredProducts(cafeDaManhaProducts); 
    } else if (activeBtn === 'principal') {
      const principalProducts = products.filter(
        (product) => product.type === 'Principal'
      );
      setFilteredProducts(principalProducts);
    }
  }, [activeBtn, products]);

  const addProductToOrder = (product) => {
    const existingProduct = orderSummary.find((item) => item.id === product.id); 
    if (existingProduct) {
      const updatedOrder = orderSummary.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }; 
        }
        return item;
      });
      setOrderSummary(updatedOrder); 
    } else {
      setOrderSummary((prevOrder) => [...prevOrder, { ...product, quantity: 1 }]); 
    }
  };

  const removeProductFromOrder = (productId) => {
    const updatedOrder = orderSummary.filter((item) => item.id !== productId);
    setOrderSummary(updatedOrder);
  };

  const increaseProductQuantity = (productId) => {
    const updatedOrder = orderSummary.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 }; 
      }
      return item;
    });
    setOrderSummary(updatedOrder);
  };

  const decreaseProductQuantity = (productId) => {
    const updatedOrder = orderSummary.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }; 
      }
      return item;
    });
    setOrderSummary(updatedOrder); 
  };

  const enviarPedidos = () => {
    if (orderSummary.length === 0 || !cliente || !mesa) {
      setShowModal(true); 
    } else {
      const token = localStorage.getItem('token'); 
      const userId = localStorage.getItem('userId'); 
      const pedido = {
        userId: userId,
        clientName: cliente,
        selectValue: mesa,
        orderResume: orderSummary,
        token: token
      };

      createOrder(pedido.userId, pedido.clientName, pedido.selectValue, pedido.orderResume, pedido.token);
      setCliente('');
      setMesa('');
      setOrderSummary([]);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="btnCardapio">
        <Btn
          buttonClassName={`cafeDaManhaBtn ${
            activeBtn === 'cafeDaManha' ? 'active' : ''
          }`}
          btnTextClassName="btnTextCardapio"
          id="cafeDaManha"
          text="CAFÉ DA MANHÃ"
          path="/Cardapio"
          onClick={() => setActiveBtn('cafeDaManha')}
        />
        <Btn
          buttonClassName={`principalBtn ${
            activeBtn === 'principal' ? 'active' : ''
          }`}
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
            orderSummary={orderSummary}
            removeProductFromOrder={removeProductFromOrder}
            increaseProductQuantity={increaseProductQuantity}
            decreaseProductQuantity={decreaseProductQuantity}
            enviarPedidos={enviarPedidos}
          />
        </section>
      </div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Alert Modal"
        className="modalContent"
        overlayClassName="modalOverlay"
      >
        <div className="modalBody">
          <h2 className="modalTitle">Atenção!</h2>
          <p className="modalMessage">Por favor, preencha todos os campos e adicione pelo menos um produto ao pedido.</p>
          <button className="modalButton" onClick={closeModal}>
            Fechar
          </button>
        </div>
      </ReactModal>
    </>
  );
}

export default Cardapio;
     
