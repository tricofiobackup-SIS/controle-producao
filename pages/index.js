import { useState } from "react";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(null);

  const menus = [
    { titulo: "Cadastro", itens: ["Ficha Cadastro", "Cadastro Geral", "Ficha Técnica", "Combinações"] },
    { titulo: "O.S", itens: ["Lançar O.S", "Controle O.S Externa", "Impressão O.S", "Consulta Produção"] },
    { titulo: "Fios", itens: ["Cadastro de Fio", "Fios e Cores", "Entrada de Fios", "Saída de Fios", "Estoque de Fios"] },
    { titulo: "Consultas", itens: ["Ficha Consulta", "Consulta Compra Fio", "Relatório Estoque"] }
  ];

  const linhas = [
    ["Blusa Tricot", "29/04/2026", "Produção", "10"],
    ["Calça Tricot", "29/04/2026", "Aberto", "8"],
    ["Casaco Tricot", "24/04/2026", "Finalizado", "5"]
  ];

  const toggleMenu = (titulo) => {
    setMenuAberto(menuAberto === titulo ? null : titulo);
  };

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <div style={styles.logoBox}>
          <div style={styles.logoArea}>
            <img src="/logo-tricofio.jpg" style={styles.logoImg} alt="Tricofio" />
          </div>
          <span style={styles.logoSub}>Controle Produção</span>
        </div>

        <nav>
          <a style={styles.active}>Tela Inicial</a>

          {menus.map((menu) => (
            <div key={menu.titulo} style={styles.menuGroup}>
              <button style={styles.menuTitle} onClick={() => toggleMenu(menu.titulo)}>
                <span>{menu.titulo}</span>
                <span>{menuAberto === menu.titulo ? "▾" : "▸"}</span>
              </button>

              {menuAberto === menu.titulo && (
                <div style={styles.submenu}>
                  {menu.itens.map((item) => (
                    <a key={item} style={styles.menuItem}>{item}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <main style={styles.main}>
        <header style={styles.header}>
          <div>
            <h1 style={styles.h1}>Controle Produção</h1>
            <p style={styles.subtitle}>Sistema web baseado fielmente na Tela Inicial do Excel</p>
          </div>

          <div style={styles.userBox}>
            <span>Admin</span>
            <strong>LF</strong>
          </div>
        </header>

        <section style={styles.cards}>
          <div style={styles.card}>
            <span style={styles.cardLabel}>O.S em aberto</span>
            <strong style={styles.cardNumber}>24</strong>
            <p style={styles.cardText}>Ordens aguardando andamento</p>
          </div>

          <div style={styles.card}>
            <span style={styles.cardLabel}>Modelos cadastrados</span>
            <strong style={styles.cardNumber}>128</strong>
            <p style={styles.cardText}>Base principal do sistema</p>
          </div>

          <div style={styles.card}>
            <span style={styles.cardLabel}>Fios em estoque</span>
            <strong style={styles.cardNumber}>342</strong>
            <p style={styles.cardText}>Controle de entrada e saída</p>
          </div>
        </section>

        <section style={styles.panel}>
          <div style={styles.panelHeader}>
            <div>
              <h2 style={styles.h2}>Encomendas / O.S</h2>
              <p style={styles.subtitle}>Primeira listagem do sistema web</p>
            </div>

            <button style={styles.button}>Nova O.S</button>
          </div>

          <div style={styles.filters}>
            <input placeholder="Buscar modelo..." style={styles.input} />

            <select style={styles.input}>
              <option>Todos os status</option>
              <option>Aberto</option>
              <option>Produção</option>
              <option>Finalizado</option>
              <option>Entregue</option>
            </select>

            <input type="date" style={styles.input} />
          </div>

          <div style={styles.table}>
            <div style={styles.group}>CONJUNTO / MODELO EXEMPLO</div>

            {linhas.map((row, index) => (
              <div style={styles.row} key={index}>
                <span>{row[0]}</span>
                <span>{row[1]}</span>
                <span>{row[2]}</span>
                <strong>{row[3]}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const colors = {
  fundo: "#A7B3BB",
  lateral: "#1F1F1F",
  lateralAtivo: "#333333",
  lateralHover: "#2B2B2B",
  texto: "#1C252A",
  textoClaro: "#FFFFFF",
  card: "#FFFFFF",
  borda: "#D6DEE3",
  faixa: "#E7EEF2",
  destaque: "#1F1F1F",
  sombra: "0 10px 25px rgba(0,0,0,.08)"
};

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: colors.fundo,
    fontFamily: "Arial, sans-serif",
    color: colors.texto
  },

  sidebar: {
    width: 292,
    background: colors.lateral,
    color: colors.textoClaro,
    padding: 24,
    boxSizing: "border-box"
  },

  logoBox: {
    marginBottom: 28
  },

  logoArea: {
    background: "#fff",
    borderRadius: 16,
    padding: "12px 16px",
    marginBottom: 10,
    boxShadow: colors.sombra
  },

  logoImg: {
    width: "100%",
    maxWidth: 210,
    display: "block"
  },

  logoSub: {
    display: "block",
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#D6DEE3",
    fontWeight: "bold"
  },

  active: {
    display: "block",
    padding: "13px 16px",
    borderRadius: 12,
    background: colors.lateralAtivo,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
    textDecoration: "none"
  },

  menuGroup: {
    marginBottom: 10
  },

  menuTitle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 14px",
    borderRadius: 10,
    background: "transparent",
    color: "#FFFFFF",
    border: 0,
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "left"
  },

  submenu: {
    padding: "4px 0 8px 10px"
  },

  menuItem: {
    display: "block",
    padding: "8px 12px",
    borderRadius: 8,
    color: "#E7EEF2",
    fontSize: 14,
    textDecoration: "none"
  },

  main: {
    flex: 1,
    padding: 34,
    boxSizing: "border-box"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },

  h1: {
    margin: 0,
    fontSize: 30
  },

  h2: {
    margin: 0,
    fontSize: 26
  },

  subtitle: {
    color: "#34464E",
    marginTop: 10
  },

  userBox: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    background: colors.card,
    padding: "10px 15px",
    borderRadius: 14,
    boxShadow: colors.sombra
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
    marginBottom: 26
  },

  card: {
    background: colors.card,
    padding: 22,
    borderRadius: 20,
    boxShadow: colors.sombra,
    border: `1px solid ${colors.borda}`
  },

  cardLabel: {
    color: "#34464E"
  },

  cardNumber: {
    fontSize: 24,
    marginLeft: 6,
    color: colors.destaque
  },

  cardText: {
    color: "#34464E"
  },

  panel: {
    background: colors.card,
    borderRadius: 24,
    padding: 24,
    boxShadow: colors.sombra,
    border: `1px solid ${colors.borda}`
  },

  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  button: {
    background: colors.destaque,
    color: "#fff",
    border: 0,
    borderRadius: 12,
    padding: "12px 18px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  filters: {
    display: "flex",
    gap: 12,
    margin: "28px 0 24px"
  },

  input: {
    padding: "12px 14px",
    borderRadius: 12,
    border: `1px solid ${colors.borda}`,
    background: "#fff",
    color: colors.texto
  },

  table: {
    border: `1px solid ${colors.borda}`,
    borderRadius: 16,
    overflow: "hidden"
  },

  group: {
    background: colors.faixa,
    color: "#34464E",
    padding: "11px 14px",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.4
  },

  row: {
    display: "grid",
    gridTemplateColumns: "1fr 150px 150px 80px",
    padding: "16px 14px",
    borderTop: `1px solid ${colors.borda}`,
    alignItems: "center",
    background: "#fff"
  }
};
