import { useState } from "react";

export default function Home() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [nivel, setNivel] = useState("admin");
  const [tela, setTela] = useState("inicial");
  const [menuAberto, setMenuAberto] = useState("Cadastro");
  const [itemAtivo, setItemAtivo] = useState("Tela Inicial");

  function entrar(e) {
    e.preventDefault();

    if (!usuario.trim() || !senha.trim()) {
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
      <>
        <style>{css}</style>

        <div className="login-page">
          <form className="login-card" onSubmit={entrar}>
            <img src="/logo-tricofio.png" className="login-logo" alt="Tricofio" />

            <h1>Controle Produção</h1>
            <p>Acesse o sistema</p>

            <label>Usuário</label>
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Digite seu usuário"
            />

            <label>Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />

            <label>Nível</label>
            <select value={nivel} onChange={(e) => setNivel(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="visitante">Visitante</option>
            </select>

            <button type="submit">Entrar</button>

            <small>Login provisório para teste visual.</small>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{css}</style>

      <div className="page">
        <aside className="sidebar">
          <div className="logo-area">
            <img src="/logo-tricofio.png" className="logo-img" alt="Tricofio" />
          </div>

          <div className="logo-sub">Controle Produção</div>

          <button
            className={itemAtivo === "Tela Inicial" ? "nav-active" : "nav-button"}
            onClick={() => {
              setTela("inicial");
              setItemAtivo("Tela Inicial");
            }}
          >
            Tela Inicial
          </button>

          {menus.map((menu) => (
            <div key={menu.titulo} className="menu-group">
              <button
                className="menu-title"
                onClick={() =>
                  setMenuAberto(menuAberto === menu.titulo ? null : menu.titulo)
                }
              >
                <span>{menu.titulo}</span>
                <span>{menuAberto === menu.titulo ? "▾" : "▸"}</span>
              </button>

              {menuAberto === menu.titulo && (
                <div className="submenu">
                  {menu.itens.map((item) => (
                    <button
                      key={item.nome}
                      className={
                        itemAtivo === item.nome ? "submenu-item active-item" : "submenu-item"
                      }
                      onClick={() => {
                        setTela(item.tela);
                        setItemAtivo(item.nome);
                      }}
                    >
                      {item.nome}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button className="logout-btn" onClick={() => setLogado(false)}>
            Sair
          </button>
        </aside>

        <main className="main">
          <div className="user-top">
            <span>{nivel === "admin" ? "Admin" : "Visitante"}</span>
            <strong>{usuario || "Usuário"}</strong>
          </div>

          {tela === "inicial" && <TelaInicial />}
          {tela === "modelos" && <FichaModelos />}
        </main>
      </div>
    </>
  );
}

function TelaInicial() {
  return (
    <div className="content">
      <h1>Controle Produção</h1>
      <p className="subtitle">Sistema web baseado no Excel Tricofio</p>
    </div>
  );
}

function FichaModelos() {
  const fios = Array.from({ length: 12 }, (_, i) => i + 1);
  const partes = Array.from({ length: 13 }, (_, i) => i + 1);

  return (
    <div className="content">
      <div className="page-header">
        <div>
          <h1>Ficha de Modelos</h1>
          <p className="subtitle">Cadastro e manutenção dos modelos de produção</p>
        </div>

        <div className="actions">
          <button className="primary-btn">Cadastrar novo</button>
          <button className="secondary-btn">Carregar</button>
          <button className="secondary-btn">Atualizar</button>
          <button className="secondary-btn">Limpar</button>
          <button className="danger-btn">Excluir</button>
        </div>
      </div>

      <section className="card">
        <h2>Dados principais</h2>

        <div className="grid4">
          <Campo label="Código" />
          <Campo label="Tempo Peça" />
          <Campo label="Máquina" />
          <Campo label="Coleção" />
        </div>

        <div className="grid4">
          <Campo label="Peso Total" />
          <Campo label="Programador" />
          <Campo label="NCM" />
          <Campo label="Data" value="30/04/2026" />
        </div>
      </section>

      <div className="grid2">
        <section className="card">
          <h2>Fios e cores</h2>

          <div className="table-header-5">
            <span>Fio</span>
            <span>Peso</span>
            <span>Cor 1</span>
            <span>Cor 2</span>
            <span>Cor 3</span>
          </div>

          {fios.map((n) => (
            <div className="table-row-5" key={n}>
              <strong>Fio {n}</strong>
              <input />
              <input />
              <input />
              <input />
            </div>
          ))}
        </section>

        <section className="card">
          <h2>Partes e quantidades</h2>

          <div className="table-header-2">
            <span>Parte</span>
            <span>Quantidade</span>
          </div>

          {partes.slice(0, 12).map((n) => (
            <div className="table-row-2" key={n}>
              <strong>Parte {n}</strong>
              <input />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function Campo({ label, value }) {
  return (
    <label className="campo">
      <span>{label}</span>
      <input defaultValue={value || ""} />
    </label>
  );
}

const css = `
  :root {
    --fundo: #AEBCC3;
    --lateral: #1F1F1F;
    --lateral2: #292929;
    --ativo: #34464E;
    --texto: #10222C;
    --card: #FFFFFF;
    --borda: #D6DEE3;
    --destaque: #5E7A86;
    --danger: #B43131;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  .page {
    display: flex;
    min-height: 100vh;
    background: var(--fundo);
    font-family: Arial, sans-serif;
    color: var(--texto);
  }

  .sidebar {
    width: 292px;
    background: var(--lateral);
    color: #fff;
    padding: 22px;
  }

  .logo-area {
    background: transparent;
    border-radius: 12px;
    padding: 2px;
    margin-bottom: 8px;
  }

  .logo-img {
    width: 76%;
    display: block;
    margin: 0 auto;
  }

  .logo-sub {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #D6DEE3;
    margin: 8px 0 25px;
    text-align: center;
  }

  .nav-button,
  .nav-active,
  .menu-title,
  .submenu-item,
  .logout-btn {
    font-family: Arial, sans-serif;
  }

  .nav-button,
  .nav-active {
    width: 100%;
    padding: 13px 16px;
    border-radius: 10px;
    border: 0;
    margin-bottom: 16px;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
    color: #fff;
    transition: all .2s ease;
  }

  .nav-button {
    background: transparent;
  }

  .nav-active {
    background: var(--ativo);
    box-shadow: inset 3px 0 0 #AEBCC3;
  }

  .nav-button:hover,
  .nav-active:hover {
    background: var(--lateral2);
    transform: translateX(2px);
  }

  .menu-group {
    margin-bottom: 8px;
  }

  .menu-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: 10px;
    background: transparent;
    color: #fff;
    border: 0;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    transition: all .2s ease;
  }

  .menu-title:hover {
    background: var(--lateral2);
    transform: translateX(2px);
  }

  .submenu {
    padding-left: 12px;
    padding-bottom: 8px;
  }

  .submenu-item {
    display: block;
    width: 100%;
    background: transparent;
    border: 0;
    color: #E7EEF2;
    text-align: left;
    padding: 9px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: all .2s ease;
    font-size: 14px;
  }

  .submenu-item:hover {
    background: #2B2B2B;
    color: #fff;
    transform: translateX(3px);
  }

  .active-item {
    background: #34464E;
    color: #fff;
    box-shadow: inset 3px 0 0 #AEBCC3;
  }

  .logout-btn {
    width: 100%;
    margin-top: 25px;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #555;
    background: transparent;
    color: #fff;
    cursor: pointer;
    transition: all .2s ease;
  }

  .logout-btn:hover {
    background: #2B2B2B;
  }

  .main {
    flex: 1;
    overflow: auto;
    position: relative;
  }

  .user-top {
    position: absolute;
    top: 20px;
    right: 30px;
    background: #fff;
    border-radius: 14px;
    padding: 10px 15px;
    display: flex;
    gap: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,.08);
  }

  .content {
    padding: 32px;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-right: 160px;
  }

  h1 {
    margin: 0;
    font-size: 30px;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 20px;
  }

  .subtitle {
    color: #34464E;
    margin-top: 8px;
  }

  .actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .primary-btn,
  .secondary-btn,
  .danger-btn {
    border-radius: 10px;
    padding: 11px 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all .2s ease;
  }

  .primary-btn {
    background: var(--destaque);
    color: #fff;
    border: 0;
  }

  .secondary-btn {
    background: #fff;
    color: var(--texto);
    border: 1px solid var(--borda);
  }

  .danger-btn {
    background: var(--danger);
    color: #fff;
    border: 0;
  }

  .primary-btn:hover,
  .secondary-btn:hover,
  .danger-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(0,0,0,.12);
  }

  .card {
    background: var(--card);
    border: 1px solid var(--borda);
    border-radius: 18px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 10px 28px rgba(0,0,0,.08);
  }

  .grid4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 14px;
  }

  .grid2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .campo {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-weight: bold;
    font-size: 13px;
  }

  input,
  select {
    height: 38px;
    border-radius: 10px;
    border: 1px solid var(--borda);
    padding: 0 10px;
    background: #fff;
  }

  .table-header-5,
  .table-row-5 {
    display: grid;
    grid-template-columns: 90px repeat(4, 1fr);
    gap: 8px;
    align-items: center;
  }

  .table-header-2,
  .table-row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    align-items: center;
  }

  .table-header-5,
  .table-header-2 {
    font-weight: bold;
    background: #E7EEF2;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 8px;
  }

  .table-row-5,
  .table-row-2 {
    margin-bottom: 8px;
  }

  .login-page {
    min-height: 100vh;
    background: var(--fundo);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
  }

  .login-card {
    width: 390px;
    background: #fff;
    border-radius: 22px;
    padding: 32px;
    box-shadow: 0 20px 45px rgba(0,0,0,.18);
  }

  .login-logo {
    width: 78%;
    display: block;
    margin: 0 auto 22px;
  }

  .login-card label {
    display: block;
    font-weight: bold;
    margin-bottom: 6px;
    margin-top: 12px;
    font-size: 13px;
  }

  .login-card input,
  .login-card select {
    width: 100%;
  }

  .login-card button {
    width: 100%;
    height: 44px;
    border-radius: 12px;
    border: 0;
    background: var(--lateral);
    color: #fff;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
  }

  .login-card small {
    display: block;
    font-size: 12px;
    color: #60747E;
    text-align: center;
    margin-top: 16px;
  }
`;
