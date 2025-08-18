import { useEffect, useState } from 'react'

function Personalizacao(){
	const [tema, setTema] = useState('claro')
	const [fonte, setFonte] = useState('Roboto')
	const [msg, setMsg] = useState('')

	useEffect(()=>{
		const t = localStorage.getItem('tema') || 'claro'
		const f = localStorage.getItem('fonte') || 'Roboto'
		setTema(t); setFonte(f)
		document.body.classList.toggle('escuro', t==='escuro')
		document.body.style.fontFamily = f
	},[])

	const salvar = () => {
		localStorage.setItem('tema', tema)
		localStorage.setItem('fonte', fonte)
		document.body.classList.toggle('escuro', tema==='escuro')
		document.body.style.fontFamily = fonte
		setMsg(`Tema: ${tema[0].toUpperCase()+tema.slice(1)}, Fonte: ${fonte}`)
		setTimeout(()=>setMsg(''),2000)
		alert('Preferências salvas com sucesso!')
	}

	return (
		<main style={{padding:'2rem'}}>
			<h1>Personalize sua Experiência</h1>
			<p style={{color:'#555', marginBottom:'1.5rem'}}>Deixe o CashFlow com a sua cara! Escolha tema e fonte.</p>
			<div style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 8px #0001', padding:'2rem', maxWidth:400}}>
				<label style={{fontWeight:'bold', marginBottom:'.5rem'}}>Tema:</label>
				<select value={tema} onChange={(e)=>setTema(e.target.value)} style={{display:'block', marginBottom:'1rem', width:'100%', padding:'.5rem'}}>
					<option value="claro">Claro</option>
					<option value="escuro">Escuro</option>
				</select>
				<label style={{fontWeight:'bold', marginBottom:'.5rem'}}>Fonte:</label>
				<select value={fonte} onChange={(e)=>setFonte(e.target.value)} style={{display:'block', marginBottom:'1.5rem', width:'100%', padding:'.5rem'}}>
					<option value="Inter">Inter</option>
					<option value="Roboto">Roboto</option>
					<option value="Montserrat">Montserrat</option>
				</select>
				<button onClick={salvar} style={{background:'#2e7d32', color:'#fff', fontWeight:'bold', border:'none', borderRadius:8, padding:'.7rem 1.5rem', cursor:'pointer'}}>Salvar Preferências</button>
				<div id="personalizacaoMsg" style={{marginTop:'1.5rem', color:'#2e7d32'}}>{msg}</div>
			</div>
		</main>
	)
}

export default Personalizacao
