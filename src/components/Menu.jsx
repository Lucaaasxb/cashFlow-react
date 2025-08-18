import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <header className="navbar">
                <p>CashFlow</p>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/Sobre">Quem Somos</Link>
                    <Link to="/login" className="btn">Entrar</Link>
                </nav>
            </header>
        </>
    )
}

export default Menu