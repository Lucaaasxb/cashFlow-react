import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <nav >
                <header className="navbar">
                    <p>CashFlow</p>
                    <nav>
                        <Link to="/">Início</Link>
                        <Link to="/Sobre">Quem Somos</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/receitas-despesas">Gastos e Rendas</Link>
                        <Link to="/metas">Metas</Link>
                        <Link to="/assistente">Algoritmo Mãe</Link>
                        <Link to="/personalizacao">Personalização</Link>
                        <Link to="/login" className="btn">Entrar</Link>
                    </nav>
                </header>

            </nav>
        </>
    )
}

export default Menu