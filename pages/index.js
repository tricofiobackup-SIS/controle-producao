import { useState } from "react";

export default function Home() {
  const [tela, setTela] = useState("inicial");
  const [menuAberto, setMenuAberto] = useState("Cadastro");

  const menus = [
    {
      titulo: "Cadastro",
      itens: [
        { nome: "Ficha Cadastro", tela: "modelos" },
        { nome: "Cadastro Geral", tela: "inicial" },
        { nome: "Ficha Técnica", tela: "inicial" },
        { nome: "Combinações", tela: "inicial" }
      ]
    },
    {
      titulo: "O.S",
      itens: [
        { nome: "Lançar O.S", tela: "inicial" },
        { nome: "Controle O.S Externa", tela: "inicial" },
        { nome: "Impressão O.S", tela: "inicial" },
        { nome: "Consulta Produção", tela: "inicial" }
      ]
    },
    {
      titulo: "Fios",
      itens: [
        { nome: "Cadastro de Fio", tela: "inicial" },
        { nome: "Fios e Cores", tela: "inicial" },
        { nome: "Entrada de Fios", tela: "inicial" },
        { nome: "Saída de Fios", tela: "inicial" },
        { nome: "Estoque de Fios", tela: "inicial" }
      ]
    },
    {
      titulo: "Consultas",
      itens: [
        { nome: "Ficha Consulta", tela: "inicial" },
        { nome: "Consulta Compra Fio", tela: "inicial" },
        { nome: "Relatório Estoque", tela: "inicial" }
      ]
    }
  ];

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <div style={styles.logoArea}>
          <img src="/logo-tricofio.jpg" style={styles.logoImg} alt="Tricofio" />
        </div>

        <div style={styles.logoSub}>Controle Produção</div>

        <button style={styles.active} onClick={() => setTela("inicial")}>
          Tela Inicial
        </button>

        {menus.map((menu) => (
          <div key={menu.titulo} style={styles.menuGroup}>
            <button
              style={styles.menuTitle}
              onClick={() => setMenuAberto(menuAberto === menu.titulo ? null : menu.titulo)}
            >
              <span>{menu.titulo}</span>
              <span>{menuAberto === menu.titulo ? "▾" : "▸"}</span>
            </button>

            {menuAberto === menu.titulo && (
              <div style={styles.submenu}>
                {menu.itens.map((item) => (
                  <button
                    key={item.nome}
                    style={styles.menuItem}
                    onClick={() => setTela(item.tela)}
                  >
                    {item.nome}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </aside>

      <main style={styles.main}>
        {tela === "inicial" && <TelaInicial />}
        {tela === "modelos" && <FichaModelos />}
      </main>
    </div>
  );
}

function TelaInicial() {
  return (
    <div style={styles.content}>
      <h1 style={styles.h1}>Controle Produção</h1>
      <p style={styles.subtitle}>Sistema web baseado no Excel Tricofio</p>
    </div>
  );
}

function FichaModelos() {
  const fios = Array.from({ length: 12 }, (_, i) => i + 1);
  const partes = Array.from({ length: 13 }, (_, i) => i + 1);

  return (
    <div style={styles.content}>
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.h1}>Ficha de Modelos</h1>
          <p style={styles.subtitle}>Cadastro e manutenção dos modelos de produção</p>
        </div>

        <div style={styles.actions}>
          <button style={styles.primaryBtn}>Cadastrar novo</button>
          <button style={styles.secondaryBtn}>Carregar</button>
          <button style={styles.secondaryBtn}>Atualizar</button>
          <button style={styles.secondaryBtn}>Limpar</button>
          <button style={styles.dangerBtn}>Excluir</button>
        </div>
      </div>

      <section style={styles.card}>
        <h2 style={styles.cardTitle}>Dados principais</h2>

        <div style={styles.grid4}>
          <Campo label="Código" />
          <Campo label="Tempo Peça" />
          <Campo label="Máquina" />
          <Campo label="Coleção" />
        </div>

        <div style={styles.grid4}>
          <Campo label="Peso Total" />
          <Campo label="Programador" />
          <Campo label="NCM" />
          <Campo label="Data" value="30/04/2026" />
        </div>
      </section>

      <div style={styles.grid2}>
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Fios e cores</h2>

          <div style={styles.tableHeader5}>
            <span>Fio</span>
            <span>Peso</span>
            <span>Cor 1</span>
            <span>Cor 2</span>
            <span>Cor 3</span>
          </div>

          {fios.map((n) => (
            <div style={styles.tableRow5} key={n}>
              <strong>Fio {n}</strong>
              <input style={styles.cellInput} />
              <input style={styles.cellInput} />
              <input style={styles.cellInput} />
              <input style={styles.cellInput} />
            </div>
          ))}
        </section>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Partes e quantidades</h2>

          <div style={styles.tableHeader2}>
            <span>Parte</span>
            <span>Quantidade</span>
          </div>

          {partes.slice(0, 12).map((n) => (
            <div style={styles.tableRow2} key={n}>
              <strong>Parte {n}</strong>
              <input style={styles.cellInput} />
            </div>
          ))}
        </section>
      </div>

      <div style={styles.grid2}>
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Bicos / Lados</h2>

          <div style={styles.grid2Inner}>
            <div>
              <h3 style={styles.smallTitle}>Lado L</h3>
              {[11, 12, 13, 14, 15, 16, 17, 18].map((n) => (
                <div style={styles.lineInput} key={n}>
                  <strong>{n}</strong>
                  <input style={styles.input} />
                </div>
              ))}
            </div>

            <div>
              <h3 style={styles.smallTitle}>Lado R</h3>
              {[21, 22, 23, 24, 25, 26, 27, 28].map((n) => (
                <div style={styles.lineInput} key={n}>
                  <strong>{n}</strong>
                  <input style={styles.input} />
                </div>
              ))}
            </div>
          </div>

          <label style={styles.label}>Observações</label>
          <textarea style={styles.textarea}></textarea>
        </section>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Peso tirado</h2>

          <div style={styles.tableHeader4}>
            <span>Fio</span>
            <span>Peso</span>
            <span>+5% M</span>
            <span>+5% G</span>
          </div>

          {fios.map((n) => (
            <div style={styles.tableRow4} key={n}>
              <strong>Fio {n}</strong>
              <input style={styles.cellInput} />
              <input style={styles.cellInput} />
              <input style={styles.cellInput} />
            </div>
          ))}
        </section>
      </div>

      <div style={styles.grid2}>
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Medidas Remalho</h2>

          <div style={styles.tableHeader2}>
            <span>Parte</span>
            <span>Medida</span>
          </div>

          {partes.map((n) => (
            <div style={styles.tableRow2} key={n}>
              <strong>Parte {n}</strong>
              <input style={styles.cellInput} />
            </div>
          ))}
        </section>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Composição e imagem</h2>

          <button style={styles.secondaryBtn}>Calcular composição</button>

          <label style={styles.label}>Composições</label>
          <textarea style={styles.textarea}></textarea>

          <label style={styles.label}>Composições Forros</label>
          <textarea style={styles.textareaSmall}></textarea>

          <label style={styles.label}>Imagem do modelo</label>
          <div style={styles.imageBox}>
            <span>Nenhuma imagem selecionada</span>
          </div>

          <div style={{ marginTop: 12 }}>
            <button style={styles.secondaryBtn}>Buscar imagem</button>
            <button style={styles.secondaryBtn}>Limpar imagem</button>
          </div>
        </section>
      </div>
    </div>
  );
}

function Campo({ label, value }) {
  return (
    <label style={styles.campo}>
      <span>{label}</span>
      <input style={styles.input} defaultValue={value || ""} />
    </label>
  );
}

const colors = {
  fundo: "#AEBCC3",
  lateral: "#1F1F1F",
  lateralAtivo: "#333333",
  texto: "#10222C",
  card: "#FFFFFF",
  borda: "#D6DEE3",
  destaque: "#5E7A86",
  danger: "#B43131"
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
    color: "#fff",
    padding: 24,
    boxSizing: "border-box"
  },
  logoArea: {
    background: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10
  },
  logoImg: {
    width: "100%",
    display: "block"
  },
  logoSub: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#D6DEE3",
    marginBottom: 25
  },
  active: {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
    background: colors.lateralAtivo,
    color: "#fff",
    border: 0,
    marginBottom: 16,
    fontWeight: "bold",
    textAlign: "left",
    cursor: "pointer"
  },
  menuGroup: {
    marginBottom: 8
  },
  menuTitle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 14px",
    borderRadius: 8,
    background: "transparent",
    color: "#fff",
    border: 0,
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 14
  },
  submenu: {
    paddingLeft: 12,
    paddingBottom: 8
  },
  menuItem: {
    display: "block",
    width: "100%",
    background: "transparent",
    border: 0,
    color: "#E7EEF2",
    textAlign: "left",
    padding: "8px 10px",
    cursor: "pointer"
  },
  main: {
    flex: 1,
    overflow: "auto"
  },
  content: {
    padding: 32
  },
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24
  },
  h1: {
    margin: 0,
    fontSize: 30
  },
  subtitle: {
    color: "#34464E",
    marginTop: 8
  },
  actions: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap"
  },
  primaryBtn: {
    background: colors.destaque,
    color: "#fff",
    border: 0,
    borderRadius: 10,
    padding: "11px 16px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  secondaryBtn: {
    background: "#fff",
    color: colors.texto,
    border: `1px solid ${colors.borda}`,
    borderRadius: 10,
    padding: "10px 14px",
    fontWeight: "bold",
    cursor: "pointer",
    marginRight: 8
  },
  dangerBtn: {
    background: colors.danger,
    color: "#fff",
    border: 0,
    borderRadius: 10,
    padding: "11px 16px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  card: {
    background: colors.card,
    border: `1px solid ${colors.borda}`,
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    boxShadow: "0 10px 28px rgba(0,0,0,.08)"
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: 16,
    fontSize: 20
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
    marginBottom: 14
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20
  },
  grid2Inner: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  },
  campo: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontWeight: "bold",
    fontSize: 13
  },
  label: {
    display: "block",
    marginTop: 14,
    marginBottom: 6,
    fontWeight: "bold",
    fontSize: 13
  },
  input: {
    height: 38,
    borderRadius: 10,
    border: `1px solid ${colors.borda}`,
    padding: "0 10px",
    background: "#fff"
  },
  cellInput: {
    height: 34,
    border: `1px solid ${colors.borda}`,
    borderRadius: 8,
    padding: "0 8px",
    background: "#fff"
  },
  tableHeader5: {
    display: "grid",
    gridTemplateColumns: "90px repeat(4, 1fr)",
    gap: 8,
    fontWeight: "bold",
    background: "#E7EEF2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8
  },
  tableRow5: {
    display: "grid",
    gridTemplateColumns: "90px repeat(4, 1fr)",
    gap: 8,
    alignItems: "center",
    marginBottom: 8
  },
  tableHeader2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
    fontWeight: "bold",
    background: "#E7EEF2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8
  },
  tableRow2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
    alignItems: "center",
    marginBottom: 8
  },
  tableHeader4: {
    display: "grid",
    gridTemplateColumns: "90px repeat(3, 1fr)",
    gap: 8,
    fontWeight: "bold",
    background: "#E7EEF2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8
  },
  tableRow4: {
    display: "grid",
    gridTemplateColumns: "90px repeat(3, 1fr)",
    gap: 8,
    alignItems: "center",
    marginBottom: 8
  },
  smallTitle: {
    margin: "0 0 10px",
    fontSize: 15
  },
  lineInput: {
    display: "grid",
    gridTemplateColumns: "50px 1fr",
    gap: 8,
    alignItems: "center",
    marginBottom: 8
  },
  textarea: {
    width: "100%",
    height: 110,
    borderRadius: 12,
    border: `1px solid ${colors.borda}`,
    padding: 10,
    resize: "vertical",
    boxSizing: "border-box"
  },
  textareaSmall: {
    width: "100%",
    height: 70,
    borderRadius: 12,
    border: `1px solid ${colors.borda}`,
    padding: 10,
    resize: "vertical",
    boxSizing: "border-box"
  },
  imageBox: {
    height: 220,
    background: "#E7EEF2",
    border: `1px dashed ${colors.destaque}`,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#34464E"
  }
};
