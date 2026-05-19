import { useState } from "react";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(null);

  const menus = [
    {
      titulo: "Cadastro",
      itens: ["Ficha Cadastro", "Cadastro Geral", "Ficha Técnica", "Combinações"]
    },
    {
      titulo: "O.S",
      itens: ["Lançar O.S", "Controle O.S Externa", "Impressão O.S", "Consulta Produção"]
    },
    {
      titulo: "Fios",
      itens: ["Cadastro de Fio", "Fios e Cores", "Entrada de Fios", "Saída de Fios", "Estoque de Fios"]
    },
    {
      titulo: "Consultas",
      itens: ["Ficha Consulta", "Consulta Compra Fio", "Relatório Estoque"]
    }
  ];

  const toggleMenu = (titulo) => {
    setMenuAberto(menuAberto === titulo ? null : titulo);
  };

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <div style={styles.logoBox}>
          <img src="/logo-tricofio.jpg" style={styles.logoImg} />
          <span style={styles.logoSub}>Controle Produção</span>
        </div>

        <nav>
          <a style={styles.active}>Tela Inicial</a>

          {menus.map((menu) => (
            <div key={menu.titulo}>
              <div
                style={styles.menuTitle}
                onClick={() => toggleMenu(menu.titulo)}
              >
                {menu.titulo}
              </div>

              {menuAberto === menu.titulo && (
                <div>
                  {menu.itens.map((item) => (
                    <a key={item} style={styles.menuItem}>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <main style={styles.main}>
        <h1>Controle Produção</h1>
        <p>Sistema web baseado no Excel</p>
      </main>
    </div>
  );
}

const colors = {
  lateral: "#1C1C1C",
  lateralHover: "#2A2A2A",
  lateralAtivo: "#333333",
  textoClaro: "#FFFFFF"
};

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh"
  },

  sidebar: {
    width: 260,
    background: colors.lateral,
    color: colors.textoClaro,
    padding: 20
  },

  logoBox: {
    marginBottom: 20
  },

  logoImg: {
    width: "100%",
    marginBottom: 10
  },

  logoSub: {
    fontSize: 12,
    opacity: 0.7
  },

  active: {
    display: "block",
    padding: 10,
    background: colors.lateralAtivo,
    borderRadius: 6,
    marginBottom: 10
  },

  menuTitle: {
    padding: 10,
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: 6
  },

  menuItem: {
    display: "block",
    padding: "8px 15px",
    fontSize: 14,
    opacity: 0.8
  },

  main: {
    flex: 1,
    padding: 30
  }
};
