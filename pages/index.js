import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="cards">

        <div className="card">
          <h3>Bem-vindo ao Tricofio ERP</h3>

          <p>
            Sistema de gestão interno da Tricofio.
          </p>
        </div>

        <div className="card">
          <h3>Cadastro</h3>

          <p>
            Acesse modelos, combinações,
            composições e produtos.
          </p>
        </div>

        <div className="card">
          <h3>O.S</h3>

          <p>
            Controle de ordens de serviço
            e produção.
          </p>
        </div>

        <div className="card">
          <h3>Fios</h3>

          <p>
            Movimentações, entradas,
            saídas e estoque.
          </p>
        </div>

      </div>
    </Layout>
  );
}
