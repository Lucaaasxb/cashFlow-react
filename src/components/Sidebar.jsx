import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

function Sidebar(){
  const { pathname } = useLocation()

  const onLogout = (e) => {
    e.preventDefault()
    window.location.href = '/'
  }

  const isActive = (to) => pathname === to

  return (
    <aside className="sidebar" aria-label="Menu lateral">
      <h1 className="brand">CashFlow</h1>
      <nav aria-label="Navegação do painel">
        <Link className={isActive('/dashboard')?'active':''} to="/dashboard"><i className="bi bi-house-door"/> Dashboard</Link>
        <Link className={isActive('/receitas-despesas')?'active':''} to="/receitas-despesas"><i className="bi bi-cash-coin"/> Gastos e Rendas</Link>
        <Link className={isActive('/metas')?'active':''} to="/metas"><i className="bi bi-bullseye"/> Metas</Link>
        <Link className={isActive('/assistente')?'active':''} to="/assistente"><i className="bi bi-robot"/> Algoritmo Mãe</Link>
        {/* <Link className={isActive('/personalizacao')?'active':''} to="/personalizacao"><i className="bi bi-sliders"/> Personalização</Link> */}
        <a href="#sair" className="sair" onClick={onLogout}><i className="bi bi-box-arrow-right"/> Sair</a>
      </nav>
    </aside>
  )
}

export default Sidebar
