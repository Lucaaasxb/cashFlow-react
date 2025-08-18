function Dashboard(){
	return (
		<main style={{padding:'2rem'}}>
			<h2>Olá, seja bem-vindo ao seu Painel Financeiro!</h2>
			<p>Gerencie suas finanças de forma inteligente e acompanhe seu progresso rumo à liberdade financeira.</p>
			<section style={{display:'flex', gap:'2rem', flexWrap:'wrap', marginTop:'2rem'}}>
				<div style={{background:'#fff', borderRadius:'12px', boxShadow:'0 2px 8px #0001', padding:'1.5rem', minWidth:220, flex:1}}>
					<h3>Saldo Atual</h3>
					<p><strong>R$ 0,00</strong></p>
					<span style={{color:'#888', fontSize:'.95rem'}}>Atualize suas receitas e despesas para visualizar seu saldo.</span>
				</div>
				<div style={{background:'#fff', borderRadius:'12px', boxShadow:'0 2px 8px #0001', padding:'1.5rem', minWidth:220, flex:1}}>
					<h3>Metas</h3>
					<p>Defina e acompanhe suas metas financeiras.</p>
					<a href="/metas" style={{color:'var(--verde-escuro)', textDecoration:'underline'}}>Ver metas</a>
				</div>
				<div style={{background:'#fff', borderRadius:'12px', boxShadow:'0 2px 8px #0001', padding:'1.5rem', minWidth:220, flex:1}}>
					<h3>Recomendações</h3>
					<p>Receba dicas personalizadas para economizar e investir melhor.</p>
					<a href="/assistente" style={{color:'var(--verde-escuro)', textDecoration:'underline'}}>Acessar assistente</a>
				</div>
			</section>
			<section style={{marginTop:'2.5rem'}}>
				<h3 style={{color:'var(--verde-escuro)'}}>Evolução Financeira</h3>
				<div style={{background:'#fff', borderRadius:'12px', boxShadow:'0 2px 8px #0001', padding:'2rem', minHeight:180, display:'flex', alignItems:'center', justifyContent:'center', color:'#aaa'}}>
					<span>Gráfico em breve...</span>
				</div>
			</section>
		</main>
	)
}

export default Dashboard
