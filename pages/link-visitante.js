import Layout from "../components/Layout";

export default function LinkVisitante() {
  const link = "https://controle-producao-alpha.vercel.app/login?tipo=visitante";

  function copiar() {
    navigator.clipboard.writeText(link);
    alert("Link copiado!");
  }

  return (
    <Layout>
      <style>{css}</style>

      <h1>Link para Visitantes</h1>
      <p className="subtitle">
        Envie este link para usuários que terão acesso somente leitura.
      </p>

      <section className="card link-card">
        <label>Link de acesso visitante</label>

        <div className="link-line">
          <input value={link} readOnly />
          <button onClick={copiar}>Copiar</button>
        </div>

        <p className="obs">
          Depois do banco de dados, este link será controlado por permissão real.
        </p>
      </section>
    </Layout>
  );
}

const css = `
  .link-card {
    max-width:760px;
    margin-top:24px;
  }

  label {
    display:block;
    font-weight:700;
    margin-bottom:8px;
  }

  .link-line {
    display:grid;
    grid-template-columns:1fr 110px;
    gap:10px;
  }

  .link-line input {
    height:42px;
  }

  .link-line button {
    background:#607D8B;
    color:#fff;
    border:0;
    border-radius:10px;
    font-weight:700;
    cursor:pointer;
  }

  .obs {
    color:#455A64;
    margin-top:18px;
    font-size:13px;
  }
`;
