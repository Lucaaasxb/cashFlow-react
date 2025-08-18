import { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [emailMsg, setEmailMsg] = useState('')

    const validarEmail = (val) => /\S+@\S+\.\S+/.test(val)

    const onSubmit = (e) => {
        e.preventDefault()
    if (!email || !senha) { alert('Preencha email e senha.'); return }
    window.location.href = '/dashboard'
    }

    return (
        <div className="login-body">
            <div className="login-wrapper animate-fade">
                <div className="login-banner animate-slide">
                    <img src="/logo.png" alt="Logo CashFlow" className="logo-banner" />
                    <img src="/DonaFlow.png" alt="Mascote CashFlow" className="avatar-banner" />
                    <h1>Bem-vindo de volta ao CashFlow!</h1>
                    <p>Entre para acompanhar seu progresso financeiro, definir metas e receber dicas personalizadas.</p>
                </div>

                <div className="login-form-box animate-slide">
                    <h2>Acesse sua conta</h2>
                    <form className="form-login" autoComplete="on" aria-label="Formulário de login" onSubmit={onSubmit}>
                                    <div className="input-group">
                                        <FaEnvelope aria-hidden="true" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E-mail"
                                required
                                aria-label="E-mail"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    setEmailMsg(validarEmail(e.target.value) ? '' : 'Email inválido.')
                                }}
                                className={!email || validarEmail(email) ? '' : 'invalid'}
                            />
                            <small id="emailMsg" aria-live="polite">{emailMsg}</small>
                        </div>

                                    <div className="input-group">
                                        <FaLock aria-hidden="true" />
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Senha"
                                required
                                aria-label="Senha"
                                autoComplete="current-password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="botao-login" aria-label="Entrar">Entrar</button>

                        <p className="criar-conta">Ainda não tem uma conta? <a href="#" style={{fontWeight:'bold', color:'#2e7d32', textDecoration:'underline'}}>Crie agora</a></p>
                    </form>
                    <div style={{marginTop:'1.5rem', textAlign:'center', color:'#888', fontSize:'0.95rem'}}>
                        <span>Seu acesso é seguro e protegido.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login