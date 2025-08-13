import './Titulo.css'

function Titulo() {
    return (
        <>
            <main class="hero">
                <section class="texto">
                    <h2>Bem-vindo ao CashFlow</h2>
                    <p>O aplicativo que transforma a forma como você gerencia suas finanças pessoais.</p>
                    <h1>Organize sua vida financeira com o <span>CashFlow</span></h1>
                    <p>CashFlow é o seu assistente financeiro pessoal, projetado para simplificar o gerenciamento de suas finanças.</p>

                    <a href="login.html" class="cta">Comece agora</a>
                </section>
                <section class="imagem">
                    <img src="/public/finace.png" alt="homem com tablet" />
                </section>
            </main>
        </>
    )
}

export default Titulo