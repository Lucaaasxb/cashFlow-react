import './Titulo.css'
import { Link } from 'react-router-dom'

function Titulo() {
    return (
        <>
            <main className="hero">
                <section className="texto">
                    <h2>Bem-vindo ao CashFlow</h2>
                    <p>O aplicativo que transforma a forma como você gerencia suas finanças pessoais.</p>
                    <h1>Organize sua vida financeira com o <span>CashFlow</span></h1>
                    <p>CashFlow é o seu assistente financeiro pessoal, projetado para simplificar o gerenciamento de suas finanças.</p>

                    <Link to="/login" className="cta">Comece agora</Link>
                </section>
                <section className="imagem">
                    <img src="/finace.png" alt="homem com tablet" />
                </section>
            </main>
        </>
    )
}

export default Titulo