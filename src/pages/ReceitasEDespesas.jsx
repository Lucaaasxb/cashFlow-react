import { useEffect, useRef, useState } from 'react'
import * as XLSX from 'xlsx';

import { Store } from '../utils/store'

function ReceitasEDespesas() {
	const [items, setItems] = useState([])
	const [show, setShow] = useState(false)
	const [desc, setDesc] = useState('')
	const [valor, setValor] = useState('')
	const [tipo, setTipo] = useState('Receita')
	const tbodyRef = useRef(null)

	const add = () => {
		const v = parseFloat(valor)
		if (!desc.trim()) { alert('Digite a descrição da transação.'); return }
		if (isNaN(v) || v <= 0) { alert('Informe um valor válido.'); return }
		const row = { data: new Date(), desc: desc.trim(), tipo, valor: v }
		setItems(prev => [...prev, row])
		setShow(false)
		setDesc(''); setValor(''); setTipo('Receita')
		setTimeout(() => { // feedback highlight
			const el = tbodyRef.current?.lastElementChild
			if (el) { el.classList.add('destaque'); setTimeout(() => el.classList.remove('destaque'), 800) }
		}, 0)
		alert('Transação cadastrada com sucesso!')
	}

	useEffect(() => {
		const saved = Store.getTransacoes()
		if (Array.isArray(saved) && saved.length) {
			setItems(saved)
		}
	}, [])

	useEffect(() => {
		Store.setTransacoes(items)
	}, [items])

	const exportarExcel = () => {
		const data = [
			['Data', 'Descrição', 'Tipo', 'Valor'],
			...items.map(i => [
				(i.data instanceof Date ? i.data : new Date(i.data)).toLocaleDateString(),
				i.desc,
				i.tipo,
				(i.tipo === 'Receita' ? '+' : '-') + ` R$ ${Number(i.valor).toFixed(2).replace('.', ',')}`
			])
		];
		const ws = XLSX.utils.aoa_to_sheet(data);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Transações');
		XLSX.writeFile(wb, 'transacoes.xlsx');
	}

	const hasItems = items.length > 0

	return (
		<main style={{ padding: '2rem' }}>
			<h1>Controle de Gastos e Rendas</h1>
			<p style={{ color: '#555', marginBottom: '1.5rem' }}>Registre suas receitas e despesas, acompanhe seu saldo e exporte seus dados.</p>
			<div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
				<button onClick={() => setShow(true)} style={{ background: '#2e7d32', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: 8, padding: '.7rem 1.5rem', cursor: 'pointer' }}>+ Nova Transação</button>
				<button onClick={exportarExcel} style={{ background: '#1976d2', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: 8, padding: '.7rem 1.5rem', cursor: 'pointer' }}>Exportar Excel</button>
			</div>
			<table id="tabelaTransacoes" aria-label="Tabela de transações" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', width: '100%' }}>
				<thead>
					<tr>
						<th>Data</th>
						<th>Descrição</th>
						<th>Tipo</th>
						<th>Valor</th>
					</tr>
				</thead>
				<tbody ref={tbodyRef}>
					{!hasItems && <tr style={{ color: '#aaa', textAlign: 'center' }}><td colSpan={4}>Nenhuma transação cadastrada ainda.</td></tr>}
					{items.map((i, idx) => (
						<tr key={idx}>
							<td>{(new Date(i.data)).toLocaleDateString()}</td>
							<td>{i.desc}</td>
							<td className={i.tipo === 'Receita' ? 'entrada' : 'saida'}>{i.tipo}</td>
							<td className={i.tipo === 'Receita' ? 'entrada' : 'saida'}>
								{i.tipo === 'Receita' ? '+' : '-'} R$ {Number(i.valor).toFixed(2).replace('.', ',')}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{show && (
				<div className="modal-bg" role="dialog" style={{ position: 'fixed', inset: 0, background: '#0006', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<div className="modal-box" style={{ background: '#fff', borderRadius: 12, padding: '1.2rem', width: 'min(92vw, 420px)' }}>
						<h2>Nova Transação</h2>
						<input type="text" placeholder="Descrição" value={desc} onChange={e => setDesc(e.target.value)} style={{ width: '100%', padding: '.6rem .8rem', borderRadius: 8, border: '1px solid #ddd', margin: '.4rem 0' }} />
						<input type="number" placeholder="Valor (R$)" value={valor} onChange={e => setValor(e.target.value)} style={{ width: '100%', padding: '.6rem .8rem', borderRadius: 8, border: '1px solid #ddd', margin: '.4rem 0' }} />
						<select value={tipo} onChange={e => setTipo(e.target.value)} style={{ width: '100%', padding: '.6rem .8rem', borderRadius: 8, border: '1px solid #ddd', margin: '.4rem 0' }}>
							<option value="Receita">Receita</option>
							<option value="Despesa">Despesa</option>
						</select>
						<div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
							<button onClick={add} style={{ background: '#2e7d32', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: 8, padding: '.6rem 1.2rem', cursor: 'pointer' }}>Salvar</button>
							<button onClick={() => setShow(false)} style={{ background: '#ccc', color: '#333', border: 'none', borderRadius: 8, padding: '.6rem 1.2rem', cursor: 'pointer' }}>Cancelar</button>
						</div>
					</div>
				</div>
			)}
		</main>
	)
}

export default ReceitasEDespesas
