import Layout from "../components/Layout.js";

export default function CadastroGeral() {
  const content = `
    <div class="cards">

      <div class="card">
        <h3>Partes Modelos</h3>
        <p>Cadastro de partes usadas nos modelos.</p>
      </div>

      <div class="card">
        <h3>Tecelões</h3>
        <p>Cadastro dos tecelões da produção.</p>
      </div>

      <div class="card">
        <h3>Coleções</h3>
        <p>Controle de coleções como Inverno e Verão.</p>
      </div>

      <div class="card">
        <h3>Acessórios</h3>
        <p>Cadastro de botões, zíperes, forros e aviamentos.</p>
      </div>

      <div class="card">
        <h3>Máquinas</h3>
        <p>Cadastro das máquinas de produção.</p>
      </div>

      <div class="card">
        <h3>Tamanhos</h3>
        <p>Grade de tamanhos PP, P, M, G e GG.</p>
      </div>

      <div class="card">
        <h3>Fornecedores</h3>
        <p>Cadastro dos fornecedores de fios e aviamentos.</p>
      </div>

      <div class="card">
        <h3>Combinações</h3>
        <p>Cadastro das combinações de cores.</p>
      </div>

      <div class="card">
        <h3>Clientes</h3>
        <p>Cadastro dos clientes do sistema.</p>
      </div>

      <div class="card">
        <h3>Peso Cones</h3>
        <p>Controle de peso padrão dos cones por fio.</p>
      </div>

      <div class="card">
        <h3>NCMs</h3>
        <p>Cadastro de NCM por tipo de produto.</p>
      </div>

    </div>
  `;

  return Layout({
    title: "Cadastro Geral",
    icon: "fas fa-database",
    breadcrumb: ["Cadastro", "Cadastro Geral"],
    content
  });
}
