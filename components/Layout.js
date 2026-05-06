import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

export default function Layout({ children, titulo, subtitulo = "" }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [menuAbertoMobile, setMenuAbertoMobile] = useState(false);
  const [agora, setAgora] = useState(new Date());

  const telas = {
    "/": {
      titulo: "Tela Inicial",
      subtitulo: "Sistema interno Tricofio",
      breadcrumb: "Início",
      icon: "⌂"
    },
    "/modelos": {
      titulo: "Ficha de Modelos",
      subtitulo: "Cadastro e manutenção dos modelos de produção",
      breadcrumb: "Cadastro > Ficha de Modelos",
      icon: "▦"
    },
    "/cadastro-geral": {
      titulo: "Cadastro Geral",
      subtitulo: "Bases usadas nas validações, listas suspensas e cadastros do sistema",
      breadcrumb: "Cadastro > Cadastro Geral",
      icon: "▣"
    },
    "/usuarios": {
      titulo: "Usuários",
      subtitulo: "Cadastro de usuários e permissões",
      breadcrumb: "Configurações > Usuários",
      icon: "⚙"
    },
    "/link-visitante": {
      titulo: "Link para Visitantes",
      subtitulo: "Compartilhamento de acesso visitante",
      breadcrumb: "Configurações > Link Visitante",
      icon: "↗"
    }
  };

  const telaAtual = telas[router.pathname] || {
    titulo: titulo || "Controle Produção",
    subtitulo: subtitulo || "",
    breadcrumb: "Sistema",
    icon: "▧"
  };

  useEffect(() => {
    const salvo = localStorage.getItem("user");

    if (!salvo && router.pathname !== "/login") {
      router.push("/login");
      return;
    }

    if (salvo) {
      setUser(JSON.parse(salvo));
    }

    setCarregando(false);

    const timer = setInterval(() => {
      setAgora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

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
    <div className="app-shell">
      <Sidebar
        abertoMobile={menuAbertoMobile}
        fecharMobile={() => setMenuAbertoMobile(false)}
      />

      {menuAbertoMobile && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuAbertoMobile(false)}
        />
      )}

      <main className="app-main">
        <header className="topbar">
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuAbertoMobile(true)}
          >
            ☰
          </button>

          <div className="topbar-left">
            <div className="page-icon">{telaAtual.icon}</div>

            <div>
              <div className="breadcrumb">{telaAtual.breadcrumb}</div>
              <h1>{telaAtual.titulo}</h1>

              {telaAtual.subtitulo && <p>{telaAtual.subtitulo}</p>}
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
  );
}
