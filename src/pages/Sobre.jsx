import "../pages/Sobre.css";
function Sobre() {
  return (
    <>
      <div>

        <main className="sobre">
          <section className="intro">
            <h1>Quem Somos</h1>
            <p>Bem-vindo ao <strong>CashFlow</strong>, sua plataforma inteligente para gestão financeira pessoal. Nossa missão é empoderar você a conquistar seus objetivos, com praticidade, segurança e inovação.</p>
            <img src="/equipe.png" alt="Equipe CashFlow" style={{ maxWidth: "320px", borderRadius: "12px", margin: "1rem auto", display: "block" }} />
          </section>
          <section className="valores">
            <h2>Nossos Valores</h2>
            <ul style={{ marginBottom: "1.5rem" }}>
              <li><strong>Transparência:</strong> Clareza e honestidade em cada funcionalidade.</li>
              <li><strong>Inovação:</strong> Evoluímos constantemente para facilitar sua vida financeira.</li>
              <li><strong>Segurança:</strong> Seus dados protegidos com tecnologia de ponta.</li>
              <li><strong>Empatia:</strong> Pensamos sempre na sua experiência e necessidades.</li>
            </ul>
          </section>
          <section className="equipe">
            <h2>Conheça Nossa Equipe</h2>
            <p>Somos apaixonados por finanças, tecnologia e design. Nosso time une experiência, criatividade e dedicação para entregar a melhor solução para você.</p>
            <p>Valorizamos o seu feedback! Sua opinião nos ajuda a evoluir e criar uma plataforma cada vez mais completa.</p>
            <p>O CashFlow é feito para todos: estudantes, profissionais, famílias e qualquer pessoa que deseja organizar e transformar sua vida financeira.</p>
            <p>Conte conosco para trilhar o caminho do sucesso financeiro!</p>
          </section>
          <div className="container" style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
            <div className="card-equipe" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px #0001', padding: '1rem', minWidth: '180px', textAlign: 'center' }}>
              <img src="/lucas.jpeg" alt="Lucas Fagundes" style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover', marginBottom: '0.5rem' }} />
              <h3>Lucas Fagundes</h3>
              <p>Desenvolvedor Front-end</p>
            </div>
            <div className="card-equipe" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px #0001', padding: '1rem', minWidth: '180px', textAlign: 'center' }}>
              <img src="/maria.jpeg" alt="Maria Silva" style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover', marginBottom: '0.5rem' }} />
              <h3>Maria Silva</h3>
              <p>Especialista em Finanças</p>
            </div>
            <div className="card-equipe" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px #0001', padding: '1rem', minWidth: '180px', textAlign: 'center' }}>
              <img src="/joão.jpeg" alt="João Pereira" style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover', marginBottom: '0.5rem' }} />
              <h3>João Pereira</h3>
              <p>Designer UX/UI</p>
            </div>
            <div className="card-equipe" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px #0001', padding: '1rem', minWidth: '180px', textAlign: 'center' }}>
              <img src="/ana.jpeg" alt="Ana Costa" style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover', marginBottom: '0.5rem' }} />
              <h3>Ana Costa</h3>
              <p>Gerente de Produto</p>
            </div>
          </div>
          <section className="valores">
            <h2>Nossa História</h2>
            <p>Fundado em 2023, o CashFlow nasceu da necessidade de uma ferramenta acessível e intuitiva para gestão
              financeira pessoal. Desde então, temos trabalhado incansavelmente para oferecer a melhor experiência aos nossos
              usuários.
              Com uma equipe apaixonada e dedicada, estamos sempre em busca de inovações e melhorias para atender às suas
              necessidades financeiras.
              Nosso objetivo é tornar a gestão financeira uma tarefa simples e descomplicada, para que você possa focar no que
              realmente importa.
              Ao longo dos anos, evoluímos e aprimoramos nossa plataforma, sempre ouvindo nossos usuários e adaptando-nos às
              suas necessidades
              Hoje, o CashFlow é uma das principais ferramentas de gestão financeira pessoal, com milhares de usuários
              satisfeitos em todo o Brasil.
              Estamos comprometidos em continuar essa jornada, sempre buscando a excelência e a inovação.</p>
          </section>
          <section className="valores">
            <h2>Nosso Compromisso</h2>
            <p>Estamos comprometidos em oferecer uma plataforma que não apenas atenda, mas supere suas expectativas. Sua
              satisfação é nossa prioridade.</p>
          </section>
          <section className="valores">
            <h2>Nosso Futuro</h2>
            <p>Continuaremos a evoluir e inovar, sempre ouvindo nossos usuários para garantir que o CashFlow seja a melhor
              ferramenta de gestão financeira disponível.</p>
          </section>
        </main>

        <section className="contato">
          <h2>Fale Conosco</h2>
          <p>Tem alguma dúvida ou sugestão? Entre em contato conosco através do nosso e-mail:
            <a href="mailto:contato@cashflow.com">contato@cashflow.com</a></p>
        </section>

        <div className="container mt-5 pt-5">


        </div>
      </div>
    </>
  )
}

export default Sobre;