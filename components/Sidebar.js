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
    <aside style={styles.sidebar}>
      <img src="/logo-tricofio.png" style={styles.logo} />

      <a href="/" style={styles.home}>Tela Inicial</a>

      {menus.map((menu) => (
        <div key={menu.titulo}>
          <button
            style={styles.menuTitle}
            onClick={() =>
              setMenuAberto(menuAberto === menu.titulo ? null : menu.titulo)
            }
          >
            <span>{menu.titulo}</span>
            <span>{menuAberto === menu.titulo ? "▾" : "▸"}</span>
          </button>

          {menuAberto === menu.titulo &&
            menu.itens.map((item) => (
              <a key={item.nome} href={item.link} style={styles.sub}>
                {item.nome}
              </a>
            ))}
        </div>
      ))}
    </aside>
  );
}

const styles = {
  sidebar: {
    width: 292,
    minHeight: "100vh",
    background: "#607D8B",
    color: "#fff",
    padding: 24,
    boxSizing: "border-box"
  },
  logo: {
    width: "75%",
    display: "block",
    margin: "0 auto 28px"
  },
  home: {
    display: "block",
    padding: "13px 16px",
    background: "#4B636E",
    borderRadius: 10,
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    marginBottom: 16
  },
  menuTitle: {
    width: "100%",
    background: "transparent",
    color: "#fff",
    border: 0,
    padding: "12px 14px",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    cursor: "pointer"
  },
  sub: {
    display: "block",
    padding: "8px 18px",
    color: "#EEF5F7",
    textDecoration: "none",
    fontSize: 14
  }
};
