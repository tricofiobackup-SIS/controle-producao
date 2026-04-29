export default function Home() {
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

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>CP</div>
          <div>
            <strong>Controle Produção</strong>
            <span>Tricofio</span>
          </div>
        </div>

        <nav>
          <a style={styles.active}>Tela Inicial</a>
          {menus.map((menu) => (
            <div key={menu.titulo} style={styles.menuGroup}>
              <p style={styles.menuTitle}>{menu.titulo}</p>
              {menu.itens.map((item) => (
                <a key={item} style={styles.menuItem}>{item}</a>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <main style={styles.main}>
        <header style={styles.header}>
          <div>
            <h1>Controle Produção</h1>
            <p>Sistema web baseado fielmente na Tela Inicial do Excel</p>
          </div>

          <div style={styles.userBox}>
            <span>Admin</span>
            <strong>LF</strong>
          </div>
        </header>

        <section style={styles.cards}>
          <div style={styles.card}>
            <span>O.S em aberto</span>
            <strong>24</strong>
            <p>Ordens aguardando andamento</p>
          </div>

          <div style={styles.card}>
            <span>Modelos cadastrados</span>
            <strong>128</strong>
            <p>Base principal do sistema</p>
          </div>

          <div style={styles.card}>
            <span>Fios em estoque</span>
            <strong>342</strong>
            <p>Controle de entrada e saída</p>
          </div>
        </section>

        <section style={styles.panel}>
          <div style={styles.panelHeader}>
            <div>
              <h2>Encomendas / O.S</h2>
              <p>Primeira listagem do sistema web</p>
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

            {[
              ["Blusa Tricot", "29/04/2026", "Produção", "10"],
              ["Calça Tricot", "29/04/2026", "Aberto", "8"],
              ["Casaco Tricot", "24/04/2026", "Finalizado", "5"]
            ].map((row, index) => (
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

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "#f6f2ef",
    fontFamily: "Arial, sans-serif",
    color: "#2d211b"
  },
  sidebar: {
    width: 280,
    background: "#7b3f2a",
    color: "#fff",
    padding: 24
  },
  logo: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginBottom: 35
  },
  logoIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    background: "#9b5a40",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  active: {
    display: "block",
    padding: "12px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,.15)",
    marginBottom: 18
  },
  menuGroup: {
    marginBottom: 20
  },
  menuTitle: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    opacity: .65,
    marginBottom: 8
  },
  menuItem: {
    display: "block",
    padding: "9px 12px",
    borderRadius: 10,
    color: "#f7e6dd",
    fontSize: 14
  },
  main: {
    flex: 1,
    padding: 32
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28
  },
  userBox: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    background: "#fff",
    padding: "10px 14px",
    borderRadius: 14,
    boxShadow: "0 8px 24px rgba(0,0,0,.06)"
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
    marginBottom: 26
  },
  card: {
    background: "#fff",
    padding: 22,
    borderRadius: 20,
    boxShadow: "0 8px 24px rgba(0,0,0,.06)"
  },
  panel: {
    background: "#fff",
    borderRadius: 22,
    padding: 24,
    boxShadow: "0 8px 24px rgba(0,0,0,.07)"
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    background: "#7b3f2a",
    color: "#fff",
    border: 0,
    borderRadius: 12,
    padding: "12px 18px",
    fontWeight: "bold"
  },
  filters: {
    display: "flex",
    gap: 12,
    margin: "24px 0"
  },
  input: {
    padding: 12,
    borderRadius: 12,
    border: "1px solid #e1cfc5"
  },
  table: {
    border: "1px solid #eee",
    borderRadius: 16,
    overflow: "hidden"
  },
  group: {
    background: "#f1e4dd",
    color: "#7b3f2a",
    padding: "10px 14px",
    fontSize: 13,
    fontWeight: "bold"
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 150px 150px 80px",
    padding: "16px 14px",
    borderTop: "1px solid #eee",
    alignItems: "center"
  }
};
