
import Layout from "../components/Layout";

export default function Usuarios() {
  return (
    <Layout>
      <style>{css}</style>

      <div className="page-header">
        <div>
          <h1>Usuários</h1>
          <p className="subtitle">Cadastro de usuários do sistema</p>
        </div>

        <button className="primary-btn">Novo Usuário</button>
      </div>

      <section className="card">
        <h2>Cadastro</h2>

        <div className="grid">
          <label>
            Nome
            <input placeholder="Nome do usuário" />
          </label>

          <label>
            E-mail / Usuário
            <input placeholder="usuario@tricofio.com.br" />
          </label>

          <label>
            Senha
            <input type="password" placeholder="Senha" />
          </label>

          <label>
            Nível
            <select>
              <option>Admin</option>
              <option>Visitante</option>
            </select>
          </label>
        </div>

        <button className="save-btn">Salvar Usuário</button>
      </section>

      <section className="card">
        <h2>Usuários cadastrados</h2>

        <div className="table-head">
          <span>Nome</span>
          <span>Usuário</span>
          <span>Nível</span>
          <span>Status</span>
        </div>

        <div className="table-row">
          <span>Administrador</span>
          <span>admin</span>
          <span>Admin</span>
          <span>Ativo</span>
        </div>

        <div className="table-row">
          <span>Visitante</span>
          <span>visitante</span>
          <span>Visitante</span>
          <span>Ativo</span>
        </div>
      </section>
    </Layout>
  );
}

const css = `
  .page-header {
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:24px;
  }

  .grid {
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    gap:16px;
  }

  label {
    display:flex;
    flex-direction:column;
    gap:6px;
    font-size:13px;
    font-weight:600;
  }

  .save-btn {
    margin-top:20px;
    background:#607D8B;
    color:white;
    border:0;
    border-radius:10px;
    padding:11px 18px;
    font-weight:600;
    cursor:pointer;
  }

  .table-head,
  .table-row {
    display:grid;
    grid-template-columns:1.5fr 1.5fr 1fr 1fr;
    gap:12px;
    padding:12px;
  }

  .table-head {
    background:#CFD8DC;
    font-weight:700;
    border-radius:10px;
  }

  .table-row {
    border-bottom:1px solid #B0BEC5;
  }
`;
