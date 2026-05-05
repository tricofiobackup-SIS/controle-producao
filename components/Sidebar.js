import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Sidebar({ abertoMobile = false, fecharMobile = () => {} }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const salvo = localStorage.getItem("user");
    if (salvo) setUser(JSON.parse(salvo));
  }, []);

  const menus = [
    {
      titulo: "Cadastro",
      icon: "▦",
      itens: [
        { nome: "Ficha Cadastro", link: "/modelos" },
        { nome: "Cadastro Geral", link: "/cadastro-geral" },
        { nome: "Ficha Técnica", link: "#" },
        { nome: "Combinações", link: "#" }
      ]
    },
    {
      titulo: "O.S",
      icon: "▤",
      itens: [
        { nome: "Lançar O.S", link: "#" },
        { nome: "Consulta Produção", link: "#" }
      ]
    },
    {
      titulo: "Fios",
      icon: "◈",
      itens: [
        { nome: "Cadastro de Fio", link: "#" },
        { nome: "Estoque de Fios", link: "#" }
      ]
    },
    {
      titulo: "Consultas",
      icon: "⌕",
      itens: [
        { nome: "Ficha Consulta", link: "#" },
        { nome: "Relatório Estoque", link: "#" }
      ]
    },
    {
      titulo: "Configurações",
      icon: "⚙",
      itens: [
        ...(user?.tipo === "admin" ? [{ nome: "Usuários", link: "/usuarios" }] : []),
        { nome: "Link Visitante", link: "/link-visitante" }
      ]
    }
  ];

  const menuInicial =
    menus.find((m) => m.itens.some((i) => i.link === router.pathname))?.titulo ||
    "Cadastro";

  const [menuAberto, setMenuAberto] = useState(menuInicial);

  useEffect(() => {
    const atual = menus.find((m) =>
      m.itens.some((i) => i.link === router.pathname)
    );

    if (atual) setMenuAberto(atual.titulo);
  }, [router.pathname, user]);

  function ativo(link) {
    return router.pathname === link;
  }

  function navegar(link) {
    if (link === "#") return;
    fecharMobile();
  }

  return (
    <>
      <style>{css}</style>

      <aside className={`sidebar ${abertoMobile ? "sidebar-mobile-open" : ""}`}>
        <a href="/" className="logo-strip" title="Voltar para a Tela Inicial" onClick={fecharMobile}>
          <img src="/logo-tricofio.png" className="logo" alt="Tricofio" />
        </a>

        <div className="menu-area">
          <div className="system-name">Controle Produção</div>

          <nav>
            {menus.map((menu) => (
              <div className="menu-group" key={menu.titulo}>
                <button
                  className={`menu-title ${menuAberto === menu.titulo ? "menu-open" : ""}`}
                  onClick={() =>
                    setMenuAberto(menuAberto === menu.titulo ? null : menu.titulo)
                  }
                >
                  <span className="menu-left">
                    <span className="menu-icon">{menu.icon}</span>
                    <span>{menu.titulo}</span>
                  </span>

                  <span className="arrow">
                    {menuAberto === menu.titulo ? "▾" : "▸"}
                  </span>
                </button>

                <div className={`submenu ${menuAberto === menu.titulo ? "submenu-open" : ""}`}>
                  {menu.itens.map((item) => (
                    <a
                      key={item.nome}
                      href={item.link}
                      onClick={() => navegar(item.link)}
                      className={`submenu-link ${ativo(item.link) ? "active" : ""}`}
                    >
                      {item.nome}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

const css = `
  .sidebar {
    width: 260px;
    min-height: 100vh;
    background: linear-gradient(180deg, #263238 0%, #37474F 55%, #455A64 100%);
    color: #FFFFFF;
    box-sizing: border-box;
    box-shadow: 8px 0 24px rgba(38,50,56,.22);
    flex-shrink: 0;
  }

  .logo-strip {
    height: 88px;
    background: rgba(236,239,241,.96);
    border-bottom: 1px solid #B0BEC5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 18px;
    text-decoration: none;
  }

  .logo-strip:hover {
    background: #ECEFF1;
  }

  .logo {
    width: 132px;
    display: block;
  }

  .menu-area {
    padding: 14px 18px 20px;
  }

  .system-name {
    text-align: center;
    font-size: 9.5px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #B0BEC5;
    margin-bottom: 20px;
  }

  .menu-group {
    margin-bottom: 7px;
  }

  .menu-title {
    width: 100%;
    background: transparent;
    color: #ECEFF1;
    border: 0;
    padding: 10px 11px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    font-size: 13px;
    transition: all .18s ease;
  }

  .menu-title:hover {
    background: rgba(96,125,139,.45);
    transform: translateX(2px);
  }

  .menu-title.menu-open {
    background: rgba(96,125,139,.34);
    color: #FFFFFF;
  }

  .menu-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .menu-icon {
    width: 25px;
    height: 25px;
    border-radius: 8px;
    background: rgba(176,190,197,.18);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #ECEFF1;
  }

  .arrow {
    font-size: 12px;
    color: #B0BEC5;
  }

  .submenu {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    padding-left: 10px;
    transition: max-height .25s ease, opacity .22s ease;
  }

  .submenu-open {
    max-height: 260px;
    opacity: 1;
    padding-top: 5px;
    padding-bottom: 6px;
  }

  .submenu-link {
    display: block;
    padding: 8px 12px 8px 18px;
    margin: 2px 0 2px 8px;
    color: #ECEFF1;
    text-decoration: none;
    font-size: 12.5px;
    border-radius: 9px;
    transition: all .18s ease;
    position: relative;
  }

  .submenu-link:before {
    content: "";
    position: absolute;
    left: 7px;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #90A4AE;
    transform: translateY(-50%);
    opacity: .65;
  }

  .submenu-link:hover {
    background: #607D8B;
    color: #FFFFFF;
    transform: translateX(3px);
  }

  .submenu-link.active {
    background: #607D8B;
    color: #FFFFFF;
    font-weight: 600;
    box-shadow: inset 3px 0 0 #ECEFF1;
  }

  .submenu-link.active:before {
    background: #FFFFFF;
    opacity: 1;
  }

  @media (max-width: 900px) {
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 270px;
      height: 100vh;
      z-index: 30;
      transform: translateX(-105%);
      transition: transform .25s ease;
      overflow-y: auto;
    }

    .sidebar-mobile-open {
      transform: translateX(0);
    }

    .logo-strip {
      height: 76px;
    }

    .logo {
      width: 120px;
    }
  }
`;
