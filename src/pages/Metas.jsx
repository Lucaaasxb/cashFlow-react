import { useEffect, useState, useRef } from 'react'
import { Store } from '../utils/store'

function Metas(){
	const [show, setShow] = useState(false)
	const [titulo, setTitulo] = useState('')
	const [alvo, setAlvo] = useState('')
	const [atual, setAtual] = useState('')
	const [metas, setMetas] = useState([])
	const containerRef = useRef(null)

	const salvar = () => {
		const a = parseFloat(alvo), b = parseFloat(atual)
		if(!titulo.trim()){ alert('Digite o título da meta.'); return }
		if(isNaN(a) || a<=0){ alert('Informe um valor total válido para a meta.'); return }
		if(isNaN(b) || b<0 || b>a){ alert('Informe um valor atual válido (menor ou igual ao total).'); return }
		const progresso = Math.round((b/a)*100)
		setMetas(prev=>[...prev, {titulo:titulo.trim(), alvo:a, atual:b, progresso}])
		setShow(false); setTitulo(''); setAlvo(''); setAtual('')
		setTimeout(()=>{
			const el = containerRef.current?.lastElementChild
			if(el){ el.classList.add('destaque'); setTimeout(()=>el.classList.remove('destaque'), 800) }
		},0)
		alert('Meta cadastrada com sucesso!')
	}

	useEffect(()=>{
		const saved = Store.getMetas()
		if(Array.isArray(saved) && saved.length){
			setMetas(saved)
		}
	},[])

	useEffect(()=>{
		Store.setMetas(metas)
	},[metas])

	return (
		<main style={{padding:'2rem'}}>
			<h1>Minhas Metas Financeiras</h1>
			<p style={{color:'#555', marginBottom:'1.5rem'}}>Defina objetivos, acompanhe seu progresso e conquiste seus sonhos.</p>
			<button onClick={()=>setShow(true)} style={{background:'#2e7d32', color:'#fff', fontWeight:'bold', border:'none', borderRadius:8, padding:'.7rem 1.5rem', marginBottom:'2rem', cursor:'pointer'}}>+ Nova Meta</button>
			<div className="metas-container" ref={containerRef}>
				{metas.length===0 && <div style={{color:'#aaa', textAlign:'center', marginTop:'2rem'}}>Nenhuma meta cadastrada ainda. Clique em <b>+ Nova Meta</b> para começar!</div>}
				{metas.map((m, idx)=> (
					<div key={idx} className="meta-card" style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 8px #0001', padding:'1rem', marginBottom:'1rem'}}>
						<h3>{m.titulo}</h3>
						<p>Progresso: R$ {m.atual.toFixed(2)} / R$ {m.alvo.toFixed(2)}</p>
						<div className="progress-bar" aria-label="Barra de progresso" style={{background:'#eee', borderRadius:10, height:10, overflow:'hidden'}}>
							<div className="progress-bar-inner" style={{width:`${m.progresso}%`, background:'#2e7d32', height:'100%'}}></div>
						</div>
						<span style={{color:m.progresso>=100?'#2e7d32':'#888', fontWeight:'bold'}}>{m.progresso}%</span>
					</div>
				))}
			</div>

			{show && (
				<div className="modal-bg" role="dialog" style={{position:'fixed', inset:0, background:'#0006', display:'flex', alignItems:'center', justifyContent:'center'}}>
					<div className="modal-box" style={{background:'#fff', borderRadius:12, padding:'1.2rem', width:'min(92vw, 420px)'}}>
						<h2>Nova Meta</h2>
						<input type="text" placeholder="Título da meta" value={titulo} onChange={e=>setTitulo(e.target.value)} style={{width:'100%', padding:'.6rem .8rem', borderRadius:8, border:'1px solid #ddd', margin:'.4rem 0'}} />
						<input type="number" placeholder="Valor total (R$)" value={alvo} onChange={e=>setAlvo(e.target.value)} style={{width:'100%', padding:'.6rem .8rem', borderRadius:8, border:'1px solid #ddd', margin:'.4rem 0'}} />
						<input type="number" placeholder="Valor atual (R$)" value={atual} onChange={e=>setAtual(e.target.value)} style={{width:'100%', padding:'.6rem .8rem', borderRadius:8, border:'1px solid #ddd', margin:'.4rem 0'}} />
						<div style={{display:'flex', gap:'1rem', marginTop:'1rem'}}>
							<button onClick={salvar} style={{background:'#2e7d32', color:'#fff', fontWeight:'bold', border:'none', borderRadius:8, padding:'.6rem 1.2rem', cursor:'pointer'}}>Salvar</button>
							<button onClick={()=>setShow(false)} style={{background:'#ccc', color:'#333', border:'none', borderRadius:8, padding:'.6rem 1.2rem', cursor:'pointer'}}>Cancelar</button>
						</div>
					</div>
				</div>
			)}
		</main>
	)
}

export default Metas
