import { useState } from "react";
import Layout from "../components/Layout";

export default function CadastroGeral() {
  const gruposIniciais = [
    {
      titulo: "Partes Modelos",
      itens: ["Ac Boca Bolso", "Ac Bojo", "Ac Bolso", "Ac Bolso Costa", "Ac Cava", "Ac Cintura", "Ac Cós"]
    },
    {
      titulo: "Tecelões",
      itens: ["André", "Carla", "Diego", "Fabricio", "Fernando", "Jose Claudio", "Josué", "Mac"]
    },
    {
      titulo: "Coleções",
      itens: ["Inverno 2025", "Verão 2025", "Inverno 2026", "Verão 2026"]
    },
    {
      titulo: "Acessórios",
      itens: ["Botões", "Colchetes", "Cordão", "Flor", "Forro Carolina Textil", "Zíper"]
    },
    {
      titulo: "Máquinas",
      itens: ["122-6", "234-7", "MACH-2", "NSSG-14", "NSSG-7", "SES-12", "SIR-14"]
    },
    {
      titulo: "Programador",
      itens: ["Delei"]
    },
    {
      titulo: "Tamanhos",
      itens: ["PP", "P", "M", "G", "GG"]
    },
    {
      titulo: "Fornecedores",
      itens: ["Acerto Estoque", "André - Devolução", "Avelã", "Bianca Fios", "Comexport", "Fiação Fides", "Incomfio"]
    },
    {
      titulo: "Combinações",
      itens: ["Comb1", "Comb2", "Comb3", "Comb4", "Comb5", "Comb6", "Comb7", "Comb8"]
    },
    {
      titulo: "Fios",
      itens: ["Cashmere Light", "Fiore", "Fresh Liner", "Hb Lã", "Jolie", "Linha 2/28", "Poliamida"]
    }
  ];

  const [grupos, setGrupos] = useState(gruposIniciais);
  const [novos, setNovos] = useState({});
  const [busca, setBusca] = useState("");

  function adicionarItem(titulo) {
    const valor = (novos[titulo] || "").trim();

    if (!valor) {
      alert("Digite um item para lançar.");
      return;
    }

    setGrupos((atual) =>
      atual.map((g) =>
        g.titulo === titulo
          ? { ...g, itens: [...g.itens, valor] }
          : g
      )
    );

    setNovos({ ...novos, [titulo]: "" });
  }

  function excluirItem(titulo, item) {
    if (!confirm(`Excluir "${item}"?`)) return;

    setGrupos((atual) =>
      atual.map((g) =>
        g.titulo === titulo
          ? { ...g, itens: g.itens.filter((i) => i !== item) }
          : g
      )
    );
  }

  return (
    <Layout>
      <style>{css}</style>

      <div className="page-header">
        <div>
          <h1>Cadastro Geral</h1>
          <p className="subtitle">
            Bases usadas nas validações, listas suspensas e cadastros do sistema
          </p>
        </div>

        <input
          className="search"
          placeholder="Buscar em todos..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="grid-erp">
        {grupos.map((grupo) => {
          const itensFiltrados = grupo.itens.filter((item) =>
            item.toLowerCase().includes(busca.toLowerCase())
          );

          return (
            <section className="erp-card" key={grupo.titulo}>
              <div className="erp-card-header">
                <div>
                  <h2>{grupo.titulo}</h2>
                  <span>{itensFiltrados.length} registros</span>
                </div>
              </div>

              <div className="insert-line">
                <input
                  placeholder="Novo item..."
                  value={novos[grupo.titulo] || ""}
                  onChange={(e) =>
                    setNovos({ ...novos, [grupo.titulo]: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") adicionarItem(grupo.titulo);
                  }}
                />
                <button onClick={() => adicionarItem(grupo.titulo)}>
                  Lançar
                </button>
              </div>

              <div className="item-list">
                {itensFiltrados.map((item) => (
                  <div className="item-row" key={item}>
                    <span>{item}</span>

                    <div className="item-actions">
                      <button>Editar</button>
                      <button onClick={() => excluirItem(grupo.titulo, item)}>
                        Excluir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}

const css = `
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
    gap: 18px;
  }

  .search {
    width: 320px;
    height: 42px;
    border: 1px solid #90A4AE;
    border-radius: 12px;
    padding: 0 14px;
    background: #ECEFF1;
  }

  .grid-erp {
    display: grid;
    grid-template-columns: repeat(5, minmax(210px, 1fr));
    gap: 18px;
  }

  .erp-card {
    background: #ECEFF1;
    border: 1px solid #90A4AE;
    border-radius: 18px;
    padding: 16px;
    box-shadow: 0 12px 28px rgba(38, 50, 56, .12);
    min-height: 370px;
  }

  .erp-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #B0BEC5;
    padding-bottom: 10px;
    margin-bottom: 12px;
  }

  .erp-card-header h2 {
    font-size: 15px;
    margin: 0;
    color: #263238;
  }

  .erp-card-header span {
    font-size: 11px;
    color: #607D8B;
  }

  .insert-line {
    display: grid;
    grid-template-columns: 1fr 78px;
    gap: 8px;
    margin-bottom: 12px;
  }

  .insert-line input {
    height: 36px;
    border-radius: 10px;
    border: 1px solid #90A4AE;
    padding: 0 10px;
  }

  .insert-line button {
    border: 0;
    border-radius: 10px;
    background: #607D8B;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }

  .item-list {
    max-height: 265px;
    overflow-y: auto;
    padding-right: 4px;
  }

  .item-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    border-bottom: 1px solid #CFD8DC;
    font-size: 12.5px;
    color: #263238;
  }

  .item-actions {
    display: flex;
    gap: 6px;
  }

  .item-actions button {
    border: 0;
    background: transparent;
    color: #607D8B;
    cursor: pointer;
    font-size: 11px;
    font-weight: 600;
  }

  .item-actions button:last-child {
    color: #455A64;
  }

  @media (max-width: 1500px) {
    .grid-erp {
      grid-template-columns: repeat(4, minmax(210px, 1fr));
    }
  }

  @media (max-width: 1200px) {
    .grid-erp {
      grid-template-columns: repeat(3, minmax(210px, 1fr));
    }
  }
`;
