import "../pages/Sobre.css";
function Sobre() {
  return (
    <>
      <main className="sobre">
    <section className="intro">
      <h1>Quem Somos</h1>
      <p>Bem-vindo ao CashFlow, sua plataforma de gestão financeira pessoal. Nossa missão é ajudar você a tomar o
        controle das suas finanças com facilidade e eficiência.</p>
      <img src="/public/equipe.png" alt="Imagem sobre nós" />
    </section>
    <section className="valores">
      <h2>Nossos Valores</h2>
      <ul>
        <li>Transparência: Acreditamos que a clareza é fundamental para uma boa gestão financeira.</li>
        <li>Inovação: Estamos sempre buscando novas formas de melhorar sua experiência.</li>
        <li>Segurança: Seus dados são protegidos com os mais altos padrões de segurança.</li>
      </ul>
    </section>
    <section className="equipe">
      <h2>Conheça Nossa Equipe</h2>
      <p>Nosso time é formado por especialistas em finanças, tecnologia e design, todos comprometidos em oferecer a
        melhor experiência para você.</p>
      <p>Estamos sempre abertos a feedbacks e sugestões para melhorar ainda mais nossa plataforma.</p>
      <p>Juntos, trabalhamos para tornar o CashFlow a ferramenta ideal para gerenciar suas finanças pessoais.</p>
      <p>Nosso objetivo é simplificar sua vida financeira, permitindo que você se concentre no que realmente importa.
      </p>
      <p>Seja você um estudante, um profissional ou alguém que deseja organizar melhor suas finanças, o CashFlow é feito
        para você.</p>
      <p>Nosso compromisso é com a sua satisfação e sucesso financeiro.</p>
    </section>
    <div className="container">
      <div className="card-equipe">
        <img src="/public/lucas.jpeg" alt="Membro da equipe 1" />
        <h3>Lucas Fagundes</h3>
        <p>Desenvolvedor Front-end</p>
      </div>
      <div className="card-equipe">
        <img src="/public/maria.jpeg" alt="Membro da equipe 2" />
        <h3>Maria Silva</h3>
        <p>Especialista em Finanças</p>
      </div>
      <div className="card-equipe">
        <img src="/public/joão.jpeg" alt="Membro da equipe 3" />
        <h3>João Pereira</h3>
        <p>Designer UX/UI</p>
      </div>
      <div className="card-equipe">
        <img src="/public/ana.jpeg" alt="Membro da equipe 4" />
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

    </>
  );
}

export default Sobre;