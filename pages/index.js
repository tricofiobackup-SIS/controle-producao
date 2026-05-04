import { useState } from "react";

export default function Home() {
  const [tela, setTela] = useState("inicial");
  const [menuAberto, setMenuAberto] = useState("Cadastro");
  const [itemAtivo, setItemAtivo] = useState("Tela Inicial");

  const menus = [
    {
      titulo: "Cadastro",
      itens: [
        { nome: "Ficha Cadastro", tela: "modelos" },
        { nome: "Cadastro Geral", tela: "cadastroGeral" },
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
    <>
      <style>{css}</style>

      <div className="page">
        <aside className="sidebar">
          <img src="/logo-tricofio.png" className="logo" />

          <button
            className={itemAtivo === "Tela Inicial" ? "active" : ""}
            onClick={() => {
              setTela("inicial");
              setItemAtivo("Tela Inicial");
            }}
          >
            Tela Inicial
          </button>

          {menus.map((menu) => (
            <div key={menu.titulo}>
              <button
                className="menu-title"
                onClick={() =>
                  setMenuAberto(menuAberto === menu.titulo ? null : menu.titulo)
                }
              >
                {menu.titulo}
              </button>

              {menuAberto === menu.titulo &&
                menu.itens.map((item) => (
                  <button
                    key={item.nome}
                    className={itemAtivo === item.nome ? "sub active" : "sub"}
                    onClick={() => {
                      setTela(item.tela);
                      setItemAtivo(item.nome);
                    }}
                  >
                    {item.nome}
                  </button>
                ))}
            </div>
          ))}
        </aside>

        <main className="main">
          {tela === "inicial" && <h1>Controle Produção</h1>}
          {tela === "modelos" && <h1>Ficha de Modelos (em construção)</h1>}
          {tela === "cadastroGeral" && <CadastroGeral />}
        </main>
      </div>
    </>
  );
}

function CadastroGeral() {
  const dados = [
    { titulo: "Tecelões", itens: ["André", "Carla", "Diego"] },
    { titulo: "Coleções", itens: ["Inverno 2025", "Verão 2025"] },
    { titulo: "Tamanhos", itens: ["PP", "P", "M", "G", "GG"] },
    { titulo: "Máquinas", itens: ["122-6", "234-7"] },
    { titulo: "Fios", itens: ["Cashmere", "Poliamida"] }
  ];

  return (
    <div>
      <h1>Cadastro Geral</h1>

      <div className="grid">
        {dados.map((g) => (
          <div className="card" key={g.titulo}>
            <h3>{g.titulo}</h3>

            <input placeholder="Novo item..." />

            {g.itens.map((i) => (
              <div className="item" key={i}>
                {i}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const css = `
.page {
  display:flex;
  font-family:Arial;
}

.sidebar {
  width:250px;
  background:#111;
  color:#fff;
  padding:20px;
}

.logo {
  width:140px;
  margin-bottom:20px;
}

.sidebar button {
  width:100%;
  background:none;
  border:none;
  color:#fff;
  padding:10px;
  text-align:left;
  cursor:pointer;
}

.menu-title {
  font-weight:bold;
  margin-top:10px;
}

.sub {
  padding-left:20px;
  color:#ccc;
}

.active {
  background:#333;
}

.main {
  flex:1;
  padding:30px;
  background:#AEBCC3;
}

.grid {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:15px;
}

.card {
  background:#fff;
  padding:15px;
  border-radius:10px;
}

.item {
  padding:5px 0;
}
`;
