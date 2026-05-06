import Layout from "../components/Layout.js";

export default function Home() {
  const content = `
    <div class="cards">

      <div class="card">
        <h3>Bem-vindo ao Tricofio ERP</h3>
        <p>Sistema de gestão interno da Tricofio.</p>
      </div>

      <div class="card">
        <h3>Cadastro</h3>
        <p>Acesse modelos, combinações, composições e produtos.</p>
      </div>

      <div class="card">
        <h3>O.S</h3>
        <p>Controle de ordens de serviço e produção.</p>
      </div>

      <div class="card">
        <h3>Fios</h3>
        <p>Movimentações, entradas, saídas e estoque.</p>
      </div>

    </div>
  `;

  return Layout({
    title: "Tela Inicial",
    icon: "fas fa-house",
    breadcrumb: ["Início"],
    content
  });
}
