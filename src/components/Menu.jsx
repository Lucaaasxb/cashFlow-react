import './Menu.css'

function Menu() {
    return (
        <>
            <nav >
                <header className="navbar">
                    <p>CashFlow</p>
                    <nav>
                        <a href="/Sobre">Quem Somos</a>
                        <a href="/login" className="btn">Entrar</a>
                    </nav>
                </header>

            </nav>
        </>
    )
}

export default Menu