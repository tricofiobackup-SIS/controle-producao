import { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  function entrar(e) {
    e.preventDefault();

    if (!usuario.trim() || !senha.trim()) {
      alert("Informe usuário e senha.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const tipo = usuario.toLowerCase() === "admin" ? "admin" : "visitante";

      localStorage.setItem(
        "user",
        JSON.stringify({
          nome: usuario,
          tipo: tipo
        })
      );

      window.location.href = "/";
    }, 700);
  }

  return (
    <>
      <style>{css}</style>

      <div className="login-page">
        <form className="login-card" onSubmit={entrar}>
          <img src="/logo-tricofio.png" className="login-logo" alt="Tricofio" />

          <h1>Controle Produção</h1>
          <p>Sistema interno Tricofio</p>

          <label>Usuário</label>
          <input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Digite seu usuário"
          />

          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar no sistema"}
          </button>

          <div className="footer">
            <span>Acesso restrito</span>
            <span>Admin / Visitante</span>
          </div>
        </form>
      </div>
    </>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  * { box-sizing: border-box; }

  body { margin: 0; }

  .login-page {
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(176,190,197,.65), transparent 35%),
      linear-gradient(135deg, #263238 0%, #607D8B 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', Arial, sans-serif;
  }

  .login-card {
    width: 410px;
    background: #ECEFF1;
    border: 1px solid #B0BEC5;
    border-radius: 26px;
    padding: 34px;
    box-shadow: 0 30px 80px rgba(38,50,56,.35);
  }

  .login-logo {
    width: 70%;
    display: block;
    margin: 0 auto 24px;
  }

  h1 {
    margin: 0;
    text-align: center;
    color: #263238;
    font-size: 26px;
    font-weight: 700;
  }

  p {
    text-align: center;
    color: #607D8B;
    margin-bottom: 28px;
  }

  label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    color: #263238;
    margin: 14px 0 7px;
  }

  input {
    width: 100%;
    height: 46px;
    border-radius: 14px;
    border: 1px solid #90A4AE;
    padding: 0 14px;
    outline: none;
    background: #FFFFFF;
    font-family: inherit;
  }

  input:focus {
    border-color: #607D8B;
    box-shadow: 0 0 0 4px rgba(96,125,139,.18);
  }

  button {
    width: 100%;
    height: 48px;
    border-radius: 15px;
    border: 0;
    background: #263238;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 15px;
    margin-top: 24px;
    cursor: pointer;
  }

  button:hover { background: #607D8B; }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    padding-top: 16px;
    border-top: 1px solid #B0BEC5;
    color: #607D8B;
    font-size: 12px;
  }
`;
