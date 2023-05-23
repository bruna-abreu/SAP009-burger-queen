import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import NavTeste from './Pages/NavTeste';

 function Rotas() {
  return (
        <BrowserRouter>        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/NavTeste" element={<NavTeste />} />          
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas