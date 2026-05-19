import { useState } from "react";

export default function Home() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [nivel, setNivel] = useState("visitante");
  const [tela, setTela] = useState("inicial");
  const [menuAberto, setMenuAberto] = useState("Cadastro");

  function entrar(e) {
    e.preventDefault();

    if (usuario.trim() === "" || senha.trim() === "") {
      alert("Informe usuário e senha.");
      return;
    }

    setLogado(true);
  }

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

  if (!logado) {
    return (
      <div style={styles.loginPage}>
        <form style={styles.loginCard} onSubmit={entrar}>
          <div style={styles.loginLogoBox}>
            <img src="/logo-tricofio.jpg" style={styles.loginLogo} alt="Tricofio" />
          </div>

          <h1 style={styles.loginTitle}>Controle Produção</h1>
          <p style={styles.loginSub}>Acesse o sistema</p>

          <label style={styles.loginLabel}>Usuário</label>
          <input
            style={styles.loginInput}
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Digite seu usuário"
          />

          <label style={styles.loginLabel}>Senha</label>
          <input
            style={styles.loginInput}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />

          <label style={styles.loginLabel}>Nível</label>
          <select
            style={styles.loginInput}
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="visitante">Visitante</option>
          </select>

          <button style={styles.loginButton} type="submit">
            Entrar
          </button>

          <p style={styles.loginHint}>Login provisório para teste visual.</p>
        </form>
      </div>
    );
  }

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

        <button style={styles.logoutBtn} onClick={() => setLogado(false)}>
          Sair
        </button>
      </aside>

      <main style={styles.main}>
        <div style={styles.userTop}>
          <span>{nivel === "admin" ? "Admin" : "Visitante"}</span>
          <strong>{usuario || "Usuário"}</strong>
        </div>

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
  loginPage: {
    minHeight: "100vh",
    background: colors.fundo,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif"
  },
  loginCard: {
    width: 390,
    background: "#fff",
    borderRadius: 22,
    padding: 32,
    boxShadow: "0 20px 45px rgba(0,0,0,.18)"
  },
  loginLogoBox: {
    background: "#fff",
    borderRadius: 16,
    marginBottom: 20
  },
  loginLogo: {
    width: "100%"
  },
  loginTitle: {
    margin: 0,
    fontSize: 28,
    color: colors.texto
  },
  loginSub: {
    color: "#50646E",
    marginBottom: 22
  },
  loginLabel: {
    display: "block",
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 12,
    fontSize: 13
  },
  loginInput: {
    width: "100%",
    height: 42,
    borderRadius: 12,
    border: `1px solid ${colors.borda}`,
    padding: "0 12px",
    boxSizing: "border-box"
  },
  loginButton: {
    width: "100%",
    height: 44,
    borderRadius: 12,
    border: 0,
    background: colors.lateral,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    cursor: "pointer"
  },
  loginHint: {
    fontSize: 12,
    color: "#60747E",
    textAlign: "center",
    marginTop: 16
  },
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
  logoutBtn: {
    width: "100%",
    marginTop: 25,
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #555",
    background: "transparent",
    color: "#fff",
    cursor: "pointer"
  },
  main: {
    flex: 1,
    overflow: "auto",
    position: "relative"
  },
  userTop: {
    position: "absolute",
    top: 20,
    right: 30,
    background: "#fff",
    borderRadius: 14,
    padding: "10px 15px",
    display: "flex",
    gap: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,.08)"
  },
  content: {
    padding: 32
  },
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingRight: 160
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
    cursor: "pointer"
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
  campo: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
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
  }
};
