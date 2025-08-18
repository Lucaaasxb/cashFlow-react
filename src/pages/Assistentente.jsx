import { useState } from 'react'

const conselhos = [
	'Você gastou muito com delivery esse mês. Que tal cozinhar amanhã? Assim economiza e ainda se diverte!',
	'Parabéns por economizar este mês! A mamãe está orgulhosa do seu esforço.',
	'Não se esqueça de pagar o cartão antes do vencimento para evitar juros.',
	'Use o que você tem antes de comprar algo novo. O consumo consciente faz bem ao bolso!',
	'Lembre-se do seu objetivo: guardar para a viagem dos sonhos!',
	'Evite compras por impulso. Respire fundo e pense duas vezes antes de clicar em \"comprar\".',
	'Que tal fazer um orçamento semanal? Assim você controla melhor seus gastos e evita surpresas.',
	'Separe uma parte do seu salário para emergências. Segurança financeira é essencial.',
	'Você está indo muito bem! Continue assim e logo alcançará suas metas.',
	'Reveja suas assinaturas. Muitas vezes pagamos por serviços que não usamos.',
]

function Assistente(){
	const [fala, setFala] = useState(conselhos[0])

	const falar = (texto) => {
		if ('speechSynthesis' in window) {
			if (window.speechSynthesis.speaking) window.speechSynthesis.cancel()
			const u = new SpeechSynthesisUtterance(texto)
			u.lang = 'pt-BR'; u.rate = 1
			window.speechSynthesis.speak(u)
		}
	}

	const outro = () => {
		const t = conselhos[Math.floor(Math.random()*conselhos.length)]
		setFala(t)
		falar(t)
	}

	return (
		<main style={{padding:'2rem', textAlign:'center'}}>
			<h1>Conselhos da Mãe Flow</h1>
			<p style={{color:'#555', marginBottom:'1rem'}}>Receba dicas carinhosas e práticas para cuidar do seu dinheiro.</p>
			<img src="/DonaFlow.png" alt="Mascote Mãe Flow" style={{maxWidth:160, borderRadius:'50%', marginBottom:'1rem'}} />
			<div id="falaMamae" style={{background:'#fffbe7', borderRadius:16, boxShadow:'0 2px 8px #0001', padding:'1.2rem', color:'#7a5c00', fontSize:'1.1rem', margin:'0 auto 1.5rem', maxWidth:560}}>
				{fala}
			</div>
			<button onClick={outro} style={{background:'#2e7d32', color:'#fff', fontWeight:'bold', border:'none', borderRadius:8, padding:'.7rem 1.5rem', cursor:'pointer'}}>Ouvir outro conselho</button>
			<div style={{marginTop:'1.5rem', color:'#888', fontSize:'.95rem'}}>Dica: Use os conselhos para criar novos hábitos e alcançar suas metas!</div>
		</main>
	)
}

export default Assistente
