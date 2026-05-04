import { useState } from "react";

export default function Sidebar() {
  const [menuAberto, setMenuAberto] = useState("Cadastro");

  const menus = [
    {
      titulo: "Cadastro",
      itens: [
        { nome: "Ficha Cadastro", link: "/modelos" },
        { nome: "Cadastro Geral", link: "/cadastro-geral" },
        { nome: "Ficha Técnica", link: "#" },
        { nome: "Combinações", link: "#" }
      ]
    },
    {
      titulo: "O.S",
      itens: [
        { nome: "Lançar O.S", link: "#" },
        { nome: "Consulta Produção", link: "#" }
      ]
    },
    {
      titulo: "Fios",
      itens: [
        { nome: "Cadastro de Fio", link: "#" },
        { nome: "Estoque de Fios", link: "#" }
      ]
    },
    {
      titulo: "Consultas",
      itens: [
        { nome: "Ficha Consulta", link: "#" },
        { nome: "Relatório Estoque", link: "#" }
      ]
    }
  ];

  return (
    <>
      <style>{css}</style>

      <aside className="sidebar">
        <div className="logo-card">
          <img src="/logo-tricofio.png" className="logo" alt="Tricofio" />
        </div>

        <div className="system-name">Controle Produção</div>

        <a href="/" className="home-link">
          Tela Inicial
        </a>

        {menus.map((menu) => (
          <div className="menu-group" key={menu.titulo}>
            <button
              className="menu-title"
              onClick={() =>
                setMenuAberto(menuAberto === menu.titulo ? null : menu.titulo)
              }
            >
              <span>{menu.titulo}</span>
              <span>{menuAberto === menu.titulo ? "▾" : "▸"}</span>
            </button>

            {menuAberto === menu.titulo &&
              menu.itens.map((item) => (
                <a key={item.nome} href={item.link} className="submenu-link">
                  {item.nome}
                </a>
              ))}
          </div>
        ))}
      </aside>
    </>
  );
}

const css = `
  .sidebar {
    width: 292px;
    min-height: 100vh;
    background: #263238;
    color: #FFFFFF;
    padding: 24px 22px;
    box-sizing: border-box;
    box-shadow: 8px 0 24px rgba(38, 50, 56, .18);
  }

  .logo-card {
    background: #ECEFF1;
    border: 1px solid #90A4AE;
    border-radius: 18px;
    padding: 14px 18px;
    margin-bottom: 14px;
    box-shadow: 0 10px 24px rgba(0,0,0,.16);
  }

  .logo {
    width: 86%;
    display: block;
    margin: 0 auto;
  }

  .system-name {
    text-align: center;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #B0BEC5;
    margin-bottom: 28px;
  }

  .home-link {
    display: block;
    padding: 13px 16px;
    background: #455A64;
    color: #FFFFFF;
    border-radius: 12px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 18px;
    box-shadow: inset 3px 0 0 #90A4AE;
  }

  .menu-group {
    margin-bottom: 8px;
  }

  .menu-title {
    width: 100%;
    background: transparent;
    color: #FFFFFF;
    border: 0;
    padding: 12px 14px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    transition: .2s ease;
  }

  .menu-title:hover {
    background: #455A64;
    transform: translateX(2px);
  }

  .submenu-link {
    display: block;
    padding: 9px 18px;
    margin-left: 8px;
    color: #ECEFF1;
    text-decoration: none;
    font-size: 13px;
    border-radius: 8px;
    transition: .2s ease;
  }

  .submenu-link:hover {
    background: #607D8B;
    color: #FFFFFF;
    transform: translateX(3px);
  }
`;
