import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import NoPages from './pages/NoPages.jsx'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="*" element={<NoPages />} />
          <Route path="CalcMetros" element={<CalcMetros />} />
          <Route path="CalcCentimetros" element={<CalcCentimetros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App