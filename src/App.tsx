import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/pages/Register';
import LandingPage from './components/pages/LandingPage';
import LogIn from './components/pages/LogIn';
import Home from './components/pages/Home';
import { FinishRegister } from './components/pages/FinishRegister';
import HistoryPage from './components/pages/History';
import AboutPage from './components/pages/AboutUs';
import ServicesPage from './components/pages/ServicesPage';

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/entrar" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/terminar_cadastro" element={<FinishRegister/>} />
        <Route path="/historia" element={<HistoryPage/>} />
        <Route path="/sobre" element={<AboutPage/>} />
        <Route path="/servicos" element={<ServicesPage/>} />
        {/* Outras rotas da sua aplicação */}
      </Routes>
    </Router>
    </>
  )
}

export default App
