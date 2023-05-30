import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'
import CardapioPage from './Pages/CardapioPage'

 function Rotas() {
  return (
        <BrowserRouter>        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/HomePage" element={<HomePage />} /> 
                <Route path="/Cardapio" element={<CardapioPage />} />
            
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas