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
      window.location.href = "/";
    }, 700);
  }

  return (
    <>
      <style>{css}</style>

      <div className="login-page">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>

        <form className="login-card" onSubmit={entrar}>
          <div className="logo-box">
            <img src="/logo-tricofio.png" className="logo" alt="Tricofio" />
          </div>

          <h1>Controle Produção</h1>
          <p className="subtitle">Sistema interno de produção Tricofio</p>

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

          <div className="login-footer">
            <span>Acesso restrito</span>
            <span>Admin / Visitante</span>
          </div>
        </form>
      </div>
    </>
  );
}

const css = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  .login-page {
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(174,188,195,.55), transparent 35%),
      linear-gradient(135deg, #607D8B 0%, #2F3E46 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    position: relative;
    overflow: hidden;
  }

  .bg-shape {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,.08);
    filter: blur(1px);
  }

  .shape-1 {
    width: 420px;
    height: 420px;
    top: -120px;
    right: -100px;
  }

  .shape-2 {
    width: 280px;
    height: 280px;
    bottom: -80px;
    left: -60px;
  }

  .login-card {
    width: 410px;
    background: rgba(255,255,255,.96);
    border: 1px solid rgba(255,255,255,.65);
    border-radius: 26px;
    padding: 34px;
    box-shadow: 0 30px 80px rgba(0,0,0,.30);
    backdrop-filter: blur(12px);
    animation: subir .45s ease;
    position: relative;
    z-index: 2;
  }

  @keyframes subir {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .logo-box {
    background: #fff;
    border-radius: 18px;
    padding: 14px;
    margin-bottom: 22px;
    box-shadow: 0 12px 28px rgba(0,0,0,.08);
  }

  .logo {
    width: 72%;
    display: block;
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-size: 28px;
    color: #263840;
    letter-spacing: -0.5px;
  }

  .subtitle {
    text-align: center;
    color: #607D8B;
    margin: 10px 0 28px;
  }

  label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    color: #263840;
    margin: 14px 0 7px;
  }

  input {
    width: 100%;
    height: 46px;
    border-radius: 14px;
    border: 1px solid #D6DEE3;
    padding: 0 14px;
    outline: none;
    font-size: 14px;
    transition: all .2s ease;
    background: #FBFCFD;
  }

  input:focus {
    border-color: #607D8B;
    box-shadow: 0 0 0 4px rgba(96,125,139,.16);
    background: #fff;
  }

  button {
    width: 100%;
    height: 48px;
    border-radius: 15px;
    border: 0;
    background: #263840;
    color: #fff;
    font-weight: 800;
    font-size: 15px;
    margin-top: 24px;
    cursor: pointer;
    transition: all .2s ease;
    box-shadow: 0 12px 25px rgba(38,56,64,.28);
  }

  button:hover {
    background: #607D8B;
    transform: translateY(-1px);
  }

  button:disabled {
    opacity: .7;
    cursor: not-allowed;
    transform: none;
  }

  .login-footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 18px;
    padding-top: 16px;
    border-top: 1px solid #E7EEF2;
    color: #6F818A;
    font-size: 12px;
  }
`;
