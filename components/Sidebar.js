
import { useState } from "react";

export default function Sidebar() {
  const [menuAberto, setMenuAberto] = useState("Cadastro");

  const menus = [
    {
      titulo: "Cadastro",
      itens: [
        { nome: "Ficha Cadastro", link: "/modelos" },
        { nome: "Cadastro Geral", link: "/cadastro-geral" }
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
    }
  ];

  return (
    <aside style={styles.sidebar}>
      <img src="/logo-tricofio.png" style={styles.logo} />

      <a href="/" style={styles.home}>Tela Inicial</a>

      {menus.map((menu) => (
        <div key={menu.titulo}>
          <div
            style={styles.menuTitle}
            onClick={() =>
              setMenuAberto(menuAberto === menu.titulo ? null : menu.titulo)
            }
          >
            {menu.titulo}
          </div>

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
    width: 260,
    background: "#607D8B", // 🔥 SUA COR NOVA
    color: "#fff",
    padding: 20,
    minHeight: "100vh"
  },

  logo: {
    width: "75%",
    marginBottom: 20
  },

  home: {
    display: "block",
    padding: 10,
    marginBottom: 10,
    background: "#4B636E",
    borderRadius: 8,
    textDecoration: "none",
    color: "#fff"
  },

  menuTitle: {
    fontWeight: "bold",
    marginTop: 10,
    padding: 10,
    cursor: "pointer"
  },

  sub: {
    display: "block",
    padding: "8px 15px",
    color: "#E0E0E0",
    textDecoration: "none"
  }
};
