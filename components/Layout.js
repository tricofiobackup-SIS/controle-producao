import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

export default function Layout({ children, titulo, subtitulo = "" }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [agora, setAgora] = useState(new Date());

  const telas = {
    "/": {
      titulo: "Tela Inicial",
      breadcrumb: "Início",
      icon: "⌂"
    },
    "/modelos": {
      titulo: "Ficha de Modelos",
      breadcrumb: "Cadastro > Ficha de Modelos",
      icon: "▦"
    },
    "/cadastro-geral": {
      titulo: "Cadastro Geral",
      breadcrumb: "Cadastro > Cadastro Geral",
      icon: "▣"
    },
    "/usuarios": {
      titulo: "Usuários",
      breadcrumb: "Configurações > Usuários",
      icon: "⚙"
    },
    "/link-visitante": {
      titulo: "Link para Visitantes",
      breadcrumb: "Configurações > Link Visitante",
      icon: "↗"
    }
  };

  const telaAtual = telas[router.pathname] || {
    titulo: titulo || "Controle Produção",
    breadcrumb: "Sistema",
    icon: "▧"
  };

  const tituloFinal = titulo || telaAtual.titulo;

  useEffect(() => {
    const salvo = localStorage.getItem("user");

    if (!salvo) {
      router.push("/login");
      return;
    }

    setUser(JSON.parse(salvo));
    setCarregando(false);

    const timer = setInterval(() => {
      setAgora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function sair() {
    localStorage.removeItem("user");
    router.push("/login");
  }

  function dataCompleta(data) {
    return data.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  }

  function horaSemSegundos(data) {
    return data.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  if (carregando) return null;

  return (
    <>
      <style>{globalCss}</style>

      <div className="app-shell">
        <Sidebar />

        <main className="app-main">
          <header className="topbar">
            <div className="topbar-left">
              <div className="page-icon">{telaAtual.icon}</div>

              <div>
                <div className="breadcrumb">{telaAtual.breadcrumb}</div>
                <h1>{tituloFinal}</h1>
                {subtitulo && <p>{subtitulo}</p>}
              </div>
            </div>

            <div className="topbar-right">
              <span className="top-date">
                {dataCompleta(agora)} • {horaSemSegundos(agora)}
              </span>

              <span className="user-name">{user?.nome}</span>

              <button className="logout-top" onClick={sair}>
                Sair
              </button>
            </div>
          </header>

          <div key={router.pathname} className="page-container page-fade">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

const globalCss = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  * { box-sizing: border-box; }

  html, body, #__next {
    margin: 0;
    min-height: 100%;
    font-family: 'Montserrat', Arial, sans-serif;
    color: #263238;
  }

  body {
    background: linear-gradient(135deg, #B0BEC5 0%, #90A4AE 45%, #607D8B 100%);
  }

  .app-shell {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  .app-main {
    flex: 1;
    min-height: 100vh;
    overflow: auto;
    background:
      radial-gradient(circle at top right, rgba(236,239,241,.72), transparent 32%),
      linear-gradient(135deg, #ECEFF1 0%, #B0BEC5 48%, #90A4AE 100%);
    position: relative;
  }

  .topbar {
    height: 88px;
    background: rgba(236,239,241,.96);
    border-bottom: 1px solid #B0BEC5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 26px;
    box-shadow: 0 8px 22px rgba(38,50,56,.08);
    position: sticky;
    top: 0;
    z-index: 5;
    backdrop-filter: blur(10px);
  }

  .topbar-left {
    display: flex;
    align-items: center;
    gap: 13px;
    min-width: 0;
  }

  .page-icon {
    width: 36px;
    height: 36px;
    border-radius: 12px;
    background: #607D8B;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: 700;
    box-shadow: 0 8px 18px rgba(38,50,56,.16);
  }

  .breadcrumb {
    font-size: 10.5px;
    color: #607D8B;
    font-weight: 600;
    margin-bottom: 3px;
  }

  .topbar h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #263238;
    letter-spacing: .2px;
    line-height: 1.1;
  }

  .topbar p {
    margin: 3px 0 0;
    font-size: 11px;
    color: #607D8B;
    font-weight: 500;
  }

  .topbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .top-date {
    font-size: 11px;
    color: #455A64;
    font-weight: 600;
    white-space: nowrap;
    text-transform: capitalize;
  }

  .user-name {
    font-size: 12px;
    color: #607D8B;
    font-weight: 600;
  }

  .logout-top {
    border: 1px solid #90A4AE;
    background: #ECEFF1;
    color: #263238;
    border-radius: 8px;
    padding: 7px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  .logout-top:hover {
    background: #607D8B;
    color: #FFFFFF;
  }

  .page-container {
    padding: 26px;
  }

  .page-fade {
    animation: pageFade .28s ease;
  }

  @keyframes pageFade {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    color: #263238;
  }

  h2 {
    margin: 0 0 16px;
    font-size: 18px;
    font-weight: 600;
    color: #263238;
  }

  .subtitle {
    margin-top: 8px;
    color: #455A64;
    font-size: 13px;
  }

  .card {
    background: rgba(236,239,241,.94);
    border: 1px solid #90A4AE;
    border-radius: 18px;
    padding: 22px;
    box-shadow: 0 12px 28px rgba(38,50,56,.12);
    backdrop-filter: blur(8px);
  }

  input, select, textarea {
    border: 1px solid #90A4AE;
    border-radius: 10px;
    background: #FFFFFF;
    color: #263238;
    height: 38px;
    padding: 0 12px;
    font-family: inherit;
    outline: none;
  }

  input:focus, select:focus, textarea:focus {
    border-color: #607D8B;
    box-shadow: 0 0 0 3px rgba(96,125,139,.22);
  }

  button { font-family: inherit; }

  .primary-btn {
    background: #607D8B;
    color: #FFFFFF;
    border: 0;
    border-radius: 10px;
    padding: 11px 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .secondary-btn {
    background: #ECEFF1;
    color: #263238;
    border: 1px solid #90A4AE;
    border-radius: 10px;
    padding: 10px 14px;
    font-weight: 600;
    cursor: pointer;
  }

  .danger-btn {
    background: #455A64;
    color: #FFFFFF;
    border: 0;
    border-radius: 10px;
    padding: 11px 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;
