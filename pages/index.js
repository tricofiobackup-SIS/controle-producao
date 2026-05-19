import { useState } from "react";

export default function Home() {
  const [tela, setTela] = useState("inicial");
  const [menuAberto, setMenuAberto] = useState("Cadastro");

  const abrirMenu = (menu) => {
    setMenuAberto(menuAberto === menu ? null : menu);
  };

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
            <button style={styles.menuTitle} onClick={() => abrirMenu(menu.titulo)}>
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
    <>
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
        <Card titulo="O.S em aberto" numero="24" texto="Ordens aguardando andamento" />
        <Card titulo="Modelos cadastrados" numero="128" texto="Base principal do sistema" />
        <Card titulo="Fios em estoque" numero="342" texto="Controle de entrada e saída" />
      </section>

      <section style={styles.panel}>
        <h2 style={styles.h2}>Encomendas / O.S</h2>
        <p style={styles.subtitle}>Primeira listagem do sistema web</p>
      </section>
    </>
  );
}

function Card({ titulo, numero, texto }) {
  return (
    <div style={styles.card}>
      <span style={styles.cardLabel}>{titulo}</span>
      <strong style={styles.cardNumber}>{numero}</strong>
      <p style={styles.cardText}>{texto}</p>
    </div>
  );
}

function FichaModelos() {
  const fios = Array.from({ length: 12 }, (_, i) => `Fio ${i + 1}`);
  const partes = Array.from({ length: 13 }, (_, i) => `Parte ${i + 1}`);

  return (
    <div>
      <div style={styles.topBar}>
        <h1 style={styles.topTitle}>Ficha de Modelos</h1>
        <div style={styles.topLinks}>
          <span>Cadastro Geral</span>
          <span>Ordem de Serviços</span>
          <span>Ficha Técnica</span>
          <span>Consulta Modelos</span>
          <span>Cadastro de Fios</span>
          <span>Fios e Cores</span>
          <span>B.D. Modelos</span>
        </div>
      </div>

      <div style={styles.modelPage}>
        <div style={styles.actions}>
          <button style={styles.actionBtn}>Cadastrar novo Modelo</button>
          <button style={styles.actionBtn}>Carregar</button>
          <button style={styles.actionBtn}>Atualizar</button>
          <button style={styles.actionBtn}>Limpar</button>
          <button style={styles.actionBtn}>Excluir</button>
        </div>

        <div style={styles.formLine}>
          <LabelInput label="Cod:" small />
          <LabelInput label="Tempo Pç:" />
          <LabelInput label="Máquina:" />
          <LabelInput label="Coleção:" />
        </div>

        <div style={styles.modelGrid}>
          <section>
            <LabelInput label="Peso Total:" small />
            <TableLike
              headers={["", "Peso", "Cor 1", "Cor 2", "Cor 3"]}
              rows={fios}
            />
          </section>

          <section>
            <TableLike
              headers={["Partes", "Quant."]}
              rows={partes.slice(0, 12)}
            />
          </section>

          <section>
            <TableLike
              headers={["Bico", "Lado L", "Bico", "Lado R"]}
              rows={["11 / 21", "12 / 22", "13 / 23", "14 / 24", "15 / 25", "16 / 26", "17 / 27", "18 / 28"]}
            />

            <label style={styles.label}>Obs:</label>
            <textarea style={styles.textarea}></textarea>
          </section>

          <section>
            <div style={styles.smallTitle}>Peso tirado &gt;&gt;&gt;&gt;&gt;</div>
            <TableLike
              headers={["Fio", "Peso", "+5% M", "+5% G"]}
              rows={Array.from({ length: 14 }, () => "-")}
            />
          </section>
        </div>

        <div style={styles.bottomGrid}>
          <section>
            <h3 style={styles.sectionTitle}>Medidas REMALHO</h3>
            <TableLike headers={["Partes", "Medida"]} rows={partes} />
          </section>

          <section>
            <h3 style={styles.sectionTitle}>Acessórios</h3>
            <div style={styles.blankBox}></div>

            <LabelInput label="Programador:" />
            <LabelInput label="NCMs:" />
          </section>

          <section>
            <button style={styles.actionBtn}>Calcular composição</button>
            <h3 style={styles.sectionTitle}>Composições:</h3>
            <div style={styles.blankBoxLarge}></div>

            <h3 style={styles.sectionTitle}>Composições Forros:</h3>
            <div style={styles.blankBox}></div>
          </section>

          <section>
            <h3 style={styles.sectionTitle}>Imagem:</h3>
            <div style={styles.imageBox}></div>
            <div style={{ marginTop: 10 }}>
              <button style={styles.actionBtn}>Busca</button>
              <button style={styles.actionBtn}>Limpa</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function LabelInput({ label, small }) {
  return (
    <label style={styles.labelWrap}>
      <span style={styles.label}>{label}</span>
      <input style={small ? styles.inputSmall : styles.input} />
    </label>
  );
}

function TableLike({ headers, rows }) {
  return (
    <div style={styles.fakeTable}>
      <div style={styles.fakeHeader}>
        {headers.map((h) => (
          <div key={h}>{h}</div>
        ))}
      </div>

      {rows.map((row, i) => (
        <div style={styles.fakeRow} key={i}>
          {headers.map((_, j) => (
            <div key={j}>{j === 0 ? row : ""}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

const colors = {
  fundo: "#AEBCC3",
  lateral: "#1F1F1F",
  lateralAtivo: "#333333",
  texto: "#10222C",
  textoClaro: "#FFFFFF",
  card: "#FFFFFF",
  borda: "#8FA1AA",
  destaque: "#5E7A86",
  topo: "#25343B"
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
  logoArea: {
    background: "#fff",
    borderRadius: 10,
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
    padding: 0,
    boxSizing: "border-box"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 34
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
    background: "#fff",
    padding: "10px 15px",
    borderRadius: 14
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
    padding: "0 34px 26px"
  },
  card: {
    background: "#fff",
    padding: 22,
    borderRadius: 20,
    border: "1px solid #D6DEE3"
  },
  cardLabel: {
    color: "#34464E"
  },
  cardNumber: {
    fontSize: 24,
    marginLeft: 6
  },
  cardText: {
    color: "#34464E"
  },
  panel: {
    background: "#fff",
    borderRadius: 24,
    padding: 24,
    margin: "0 34px",
    border: "1px solid #D6DEE3"
  },

  topBar: {
    background: colors.topo,
    color: "#fff",
    height: 72,
    display: "flex",
    alignItems: "center"
  },
  topTitle: {
    width: 300,
    paddingLeft: 35,
    fontSize: 24,
    fontWeight: 400
  },
  topLinks: {
    display: "flex",
    gap: 22,
    fontSize: 16
  },
  modelPage: {
    padding: 24
  },
  actions: {
    display: "flex",
    gap: 36,
    marginBottom: 18
  },
  actionBtn: {
    background: colors.destaque,
    color: "#fff",
    border: 0,
    padding: "7px 22px",
    borderRadius: 2,
    boxShadow: "2px 3px 5px rgba(0,0,0,.25)",
    marginRight: 8,
    cursor: "pointer"
  },
  formLine: {
    display: "flex",
    gap: 26,
    marginBottom: 28,
    alignItems: "end"
  },
  labelWrap: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    marginRight: 12,
    marginBottom: 10
  },
  label: {
    fontWeight: "bold",
    fontSize: 13
  },
  input: {
    height: 22,
    width: 170,
    border: "1px solid #555",
    background: "#fff"
  },
  inputSmall: {
    height: 22,
    width: 70,
    border: "1px solid #555",
    background: "#fff"
  },
  modelGrid: {
    display: "grid",
    gridTemplateColumns: "360px 180px 420px 290px",
    gap: 34,
    alignItems: "start"
  },
  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "220px 220px 300px 360px",
    gap: 42,
    marginTop: 26,
    alignItems: "start"
  },
  fakeTable: {
    border: "1px solid #777",
    background: "#fff",
    fontSize: 13
  },
  fakeHeader: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
    background: "#D8E1E6",
    fontWeight: "bold",
    borderBottom: "1px solid #999"
  },
  fakeRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
    minHeight: 22,
    borderBottom: "1px solid #ccc"
  },
  textarea: {
    width: "100%",
    height: 70,
    background: "#DCEAF3",
    border: "1px solid #999"
  },
  smallTitle: {
    background: colors.destaque,
    color: "#fff",
    padding: 6,
    fontWeight: "bold"
  },
  sectionTitle: {
    fontSize: 14,
    margin: "10px 0 6px"
  },
  blankBox: {
    height: 125,
    background: "#fff",
    border: "1px solid #777"
  },
  blankBoxLarge: {
    height: 170,
    background: "#fff",
    border: "1px solid #777"
  },
  imageBox: {
    height: 300,
    background: "#D8E1E6",
    border: "1px solid #B8C4CA"
  }
};
