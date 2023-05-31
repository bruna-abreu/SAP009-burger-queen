import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'
import CardapioPage from './Pages/CardapioPage'
import PedidosPage from './Pages/PedidosPag'


 function Rotas() {
  return (
        <BrowserRouter>        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/HomePage" element={<HomePage/>} /> 
                <Route path="/Cardapio" element={<CardapioPage/>} />
                <Route path="/Pedidos" element={<PedidosPage/>} />

            
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas