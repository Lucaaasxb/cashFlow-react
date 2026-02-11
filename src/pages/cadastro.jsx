import { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import './Cadastro.css'

function Cadastro() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [moedamonetaria, setMoedaMonetaria] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [emailMsg, setEmailMsg] = useState('')
    const [senhaMsg, setSenhaMsg] = useState('')

    const validarEmail = (val) => /\S+@\S+\.\S+/.test(val)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!nome || !sobrenome || !moedamonetaria || !email || !senha || !confirmarSenha) {
            alert('Preencha todos os campos.');
            return
        }
        if (!validarEmail(email)) {
            alert('Email inválido.');
            return
        }
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem.');
            return
        }
        if (senha.length < 6) {
            alert('A senha deve ter no mínimo 6 caracteres.');
            return
        }

        // Salvar dados no localStorage
        const usuarioDados = { nome, sobrenome, moedamonetaria, email, senha }
        localStorage.setItem('cashFlowUser', JSON.stringify(usuarioDados))
        localStorage.setItem('cashFlowToken', 'logado')

        console.log({ nome, sobrenome, moedamonetaria, email, senha })
        alert('Cadastro realizado com sucesso!')
        window.location.href = '/login'
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
                    <h2>Crie sua conta</h2>
                    <form className="form-login" autoComplete="on" aria-label="Formulário de cadastro" onSubmit={onSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                                required
                                aria-label="Nome"
                                autoComplete="given-name"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                id="sobrenome"
                                name="sobrenome"
                                placeholder="Sobrenome"
                                required
                                aria-label="Sobrenome"
                                autoComplete="family-name"
                                value={sobrenome}
                                onChange={(e) => setSobrenome(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <select
                                id="moeda"
                                name="moeda"
                                placeholder="Moeda Monetária"
                                required
                                aria-label="Moeda Monetária"
                                value={moedamonetaria}
                                onChange={(e) => setMoedaMonetaria(e.target.value)}
                            >
                                <option value="">Selecione uma moeda</option>
                                <option value="BRL">Real (R$)</option>
                                <option value="USD">Dólar (US$)</option>
                                <option value="EUR">Euro (€)</option>
                            </select>
                        </div>

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
                                autoComplete="new-password"
                                value={senha}
                                onChange={(e) => {
                                    setSenha(e.target.value)
                                    if (confirmarSenha && e.target.value !== confirmarSenha) {
                                        setSenhaMsg('As senhas não coincidem.')
                                    } else {
                                        setSenhaMsg('')
                                    }
                                }}
                            />
                        </div>

                        <div className="input-group">
                            <FaLock aria-hidden="true" />
                            <input
                                type="password"
                                id="confirmarSenha"
                                name="confirmarSenha"
                                placeholder="Confirmar Senha"
                                required
                                aria-label="Confirmar Senha"
                                autoComplete="new-password"
                                value={confirmarSenha}
                                onChange={(e) => {
                                    setConfirmarSenha(e.target.value)
                                    if (senha && e.target.value !== senha) {
                                        setSenhaMsg('As senhas não coincidem.')
                                    } else {
                                        setSenhaMsg('')
                                    }
                                }}
                                className={confirmarSenha && senha !== confirmarSenha ? 'invalid' : ''}
                            />
                            <small id="senhaMsg" aria-live="polite" style={{ color: '#d32f2f' }}>{senhaMsg}</small>
                        </div>

                        <button type="submit" className="botao-login" aria-label="Cadastrar">Cadastrar</button>

                        <p className="criar-conta">Já tem uma conta? <a href="/login" style={{ fontWeight: 'bold', color: '#2e7d32', textDecoration: 'underline' }}>Acesse aqui</a></p>
                    </form>
                    <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#888', fontSize: '0.95rem' }}>
                        <span>Seu acesso é seguro e protegido.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro