import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const salvo = localStorage.getItem("user");
    if (salvo) setUser(JSON.parse(salvo));
  }, []);

  const menus = [
    {
      titulo: "Cadastro",
      icon: "▣",
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
        ...(user?.tipo === "admin"
          ? [{ nome: "Usuários", link: "/usuarios" }]
          : []),
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

  function sair() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  return (
    <>
      <style>{css}</style>

      <aside className="sidebar">
        <div className="logo-card">
          <img src="/logo-tricofio.png" className="logo" alt="Tricofio" />
        </div>

        <div className="system-name">Controle Produção</div>

        <nav>
          {menus.map((menu) => (
            <div className="menu-group" key={menu.titulo}>
              <button
                className={`menu-title ${
                  menuAberto === menu.titulo ? "menu-open" : ""
                }`}
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

              <div
                className={`submenu ${
                  menuAberto === menu.titulo ? "submenu-open" : ""
                }`}
              >
                {menu.itens.map((item) => (
                  <a
                    key={item.nome}
                    href={item.link}
                    className={`submenu-link ${ativo(item.link) ? "active" : ""}`}
                  >
                    {item.nome}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <button className="logout" onClick={sair}>
          Sair
        </button>
      </aside>
    </>
  );
}

const css = `
  .sidebar {
    width: 260px;
    min-height: 100vh;
    background: #263238;
    color: #FFFFFF;
    padding: 20px 18px;
    box-sizing: border-box;
    box-shadow: 8px 0 24px rgba(38, 50, 56, .18);
  }

  .logo-card {
    background: #ECEFF1;
    border: 1px solid #90A4AE;
    border-radius: 16px;
    padding: 12px;
    margin-bottom: 12px;
    text-align: center;
    box-shadow: 0 10px 22px rgba(0,0,0,.14);
  }

  .logo {
    width: 78%;
    display: block;
    margin: 0 auto;
  }

  .system-name {
    text-align: center;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #B0BEC5;
    margin-bottom: 24px;
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
    background: #455A64;
    transform: translateX(2px);
  }

  .menu-title.menu-open {
    background: rgba(96, 125, 139, .34);
    color: #FFFFFF;
  }

  .menu-left {
    display: flex;
    align-items: center;
    gap: 9px;
  }

  .menu-icon {
    width: 18px;
    height: 18px;
    border-radius: 6px;
    background: rgba(176,190,197,.16);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #B0BEC5;
  }

  .arrow {
    font-size: 11px;
    color: #B0BEC5;
  }

  .submenu {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    padding-left: 8px;
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
    background: #455A64;
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

  .logout {
    width: 100%;
    margin-top: 24px;
    border: 1px solid #607D8B;
    background: transparent;
    color: #ECEFF1;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
  }

  .logout:hover {
    background: #455A64;
  }
`;
