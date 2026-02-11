import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import NoPages from './pages/NoPages.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ReceitasEDespesas from './pages/ReceitasEDespesas.jsx'
import Metas from './pages/Metas.jsx'
import Personalizacao from './pages/Personalizacao.jsx'
import Assistente from './pages/Assistente.jsx'
import Cadastro from './pages/cadastro.jsx'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Sobre" element={<Sobre />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="receitas-despesas" element={<ReceitasEDespesas />} />
          <Route path="metas" element={<Metas />} />
          <Route path="assistente" element={<Assistente />} />
          <Route path="cadastro" element={<Cadastro />} />
          {/* COMMITADO POR CAUSA DO BUG DE FONTE E TEMA DO SITE */}
          {/* QUANDO ENTRA NA PÁGINA ELE MUDA PARA UMA FONTE PADRÃO */}
          {/* E QUANDO TROCA O TEMA O CSS NÃO ACOMPANHA MUDANÇA */}
          {/* <Route path="personalizacao" element={<Personalizacao />} /> */}
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App