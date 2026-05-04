import { useState } from "react";
import Layout from "../components/Layout";

export default function CadastroGeral() {
  const gruposIniciais = [
    {
      titulo: "Partes Modelos",
      itens: [
        "Ac Boca Bolso", "Ac Bojo", "Ac Bolso", "Ac Bolso Costa", "Ac Bolso Frente",
        "Ac Cava", "Ac Cintura", "Ac Cós", "Ac Costa", "Ac Decote",
        "Ac Decote Costa", "Ac Decote Frente", "Ac Direito", "Ac Esquerdo", "Ac Frente",
        "Ac Frente Cava", "Ac Gola", "Ac Gota", "Ac Lateral", "Ac Lateral Direita",
        "Ac Lateral Esquerdo", "Ac Paulistinha", "Acab", "Alça", "Babado",
        "Babado Costa", "Babado Frente", "Babado Manga", "Barra", "Boca Bolso",
        "Boca Bolso Frente", "Bojo", "Bolso", "Bolso Frente", "Cachecol",
        "Calça Costa", "Calça Frente", "Calça Frente/Costa", "Capuz", "Cava",
        "Cava Costa", "Cava Frente", "Cinto", "Cintura", "Cintura Costa",
        "Corpo", "Cós", "Cós Costa", "Cós Frente", "Costa Curta",
        "Costa Direita", "Costa Em Baixo", "Costa Em Cima", "Costa Esquerda",
        "Costa Perna Direita", "Costa Prena Esquerda", "Costas", "Costinha",
        "Decote", "Decote Costa", "Decote Frente", "Decote Ziper", "Faixa",
        "Faixa Cintura", "Faixa Direita", "Faixa Direita Costa", "Faixa Esquerda",
        "Faixa Esquerda Costa", "Faixa Top", "Flutuante", "Forro Bolso", "Franja",
        "Frente", "Frente Direita", "Frente E Costa", "Frente Esquerda",
        "Frente Perna Direita", "Frente Perna Esquerda", "Galão", "Gola",
        "Gola Costa", "Gola Frente", "Gota", "Lapela Costa", "Lapela Decote",
        "Lapela Frente", "Lateral", "Manga Direita", "Manga Esquerda", "Mangas",
        "Manguete", "Pala", "Pala Saia", "Panos", "Peça Pronta", "Perna",
        "Perna C DIREITA", "Perna C ESQUERDA", "Perna Costas", "Perna Direita",
        "Perna Esquerda", "Perna F DIREITA", "Perna F ESQUERDA", "Perna Frente",
        "Punho", "Saia", "Saia Costa", "Saia Direita", "Saia Esquerda",
        "Saia Frente", "Saia Frente E Costa", "Top", "Top Costa", "Top Frente",
        "Vestido", "Ac Punho"
      ]
    },
    {
      titulo: "Tecelões",
      itens: ["André", "Carla", "Diego", "Fabricio", "Fernando", "Jose Claudio", "Josué", "Mac", "Maicon", "Reginaldo", "Roberto Negao", "Rovani", "Valdemir"]
    },
    {
      titulo: "Coleções",
      itens: ["Inverno 2025", "Verão 2025", "Inverno 2026", "Verão 2026"]
    },
    {
      titulo: "Acessórios",
      itens: ["Botões", "Colchetes", "Cordão", "Flor", "Forro Carolina Textil", "Forro Mamut", "Ponteira", "Ziper"]
    },
    {
      titulo: "Máquinas",
      itens: ["122-6", "234-7", "MACH-2", "NSSG-14", "NSSG-7", "SES-12", "SIR-14", "SIR-7", "SSG-14", "SSR-14", "SSR-7", "SVR-14", "SWG-8"]
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
      itens: ["Acerto Estoque", "André - Devolução", "Avelã", "Bianca Fios", "Comexport", "Fiação Fides", "Incomfio", "Luma", "Minas Lã", "Modefios", "Palacio Das Lans", "Paramount", "Polo Armarinhos", "R.A Aviamentos", "Top Fios"]
    },
    {
      titulo: "Combinações",
      itens: ["Comb1", "Comb2", "Comb3", "Comb4", "Comb5", "Comb6", "Comb7", "Comb8"]
    },
    {
      titulo: "Fios",
      itens: ["Cashemire Light", "Fiore", "Fresh Liner", "Hb Lã", "Jolie", "Linha 2/28", "Poliamida", "Poliester Costura", "Polyester", "Rayon Flex", "Rayon Pp", "Rayon V Ret", "Serido", "Solar", "Veranel Bright", "Viscose", "York Soft"]
    },
    {
      titulo: "Peso Cones",
      itens: ["Cashemire Light — 0.04", "Fiore — 0.04", "Fresh Liner — 0.06", "Hb Lã — 0.04", "Jolie — 0.04", "Linha 2/28 — 0.04", "Poliamida — 0.06", "Poliester Costura — 0.06", "Polyester — 0.06", "Rayon Flex — 0.04", "Rayon Pp — 0.209", "Rayon V Ret — 0.04", "Serido — 0.04", "Solar — 0.04", "Veranel Bright — 0.04", "Viscose — 0.04", "York Soft — 0.04"]
    },
    {
      titulo: "Clientes",
      itens: ["Elly", "Galeria Tricot", "Tricôfio"]
    },
    {
      titulo: "Tipos / NCMs",
      itens: ["Blusa — 61069000", "Calça — 61046900", "Casaco — 61043900", "Colete — 61069000", "Cropped — 61069000", "Jaqueta — 61043900", "Macacão — 61122000", "Regata — 61066900", "Saia — 61044900", "Shorts — 61046900", "Top — 61069000", "Twinset — 61043900", "Vestido — 61043900"]
    }
  ];

  const [grupos, setGrupos] = useState(gruposIniciais);
  const [novos, setNovos] = useState({});
  const [busca, setBusca] = useState("");

  function adicionarItem(titulo) {
    const valor = (novos[titulo] || "").trim();
    if (!valor) return alert("Digite um item para lançar.");

    setGrupos(grupos.map(g =>
      g.titulo === titulo ? { ...g, itens: [...g.itens, valor] } : g
    ));

    setNovos({ ...novos, [titulo]: "" });
  }

  function excluirItem(titulo, item) {
    if (!confirm(`Excluir "${item}"?`)) return;

    setGrupos(grupos.map(g =>
      g.titulo === titulo ? { ...g, itens: g.itens.filter(i => i !== item) } : g
    ));
  }

  return (
    <Layout>
      <style>{css}</style>

      <div className="page-header">
        <div>
          <h1>Cadastro Geral</h1>
          <p className="subtitle">
            Dados importados da aba Ficha_Cadastro_Geral do Excel
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
          const itensFiltrados = grupo.itens.filter(item =>
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
    width: 330px;
    height: 42px;
    border: 1px solid #90A4AE;
    border-radius: 12px;
    padding: 0 14px;
    background: #ECEFF1;
  }

  .grid-erp {
    display: grid;
    grid-template-columns: repeat(4, minmax(240px, 1fr));
    gap: 18px;
  }

  .erp-card {
    background: #ECEFF1;
    border: 1px solid #90A4AE;
    border-radius: 18px;
    padding: 16px;
    box-shadow: 0 12px 28px rgba(38, 50, 56, .12);
    min-height: 390px;
  }

  .erp-card-header {
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
    max-height: 280px;
    overflow-y: auto;
    padding-right: 5px;
  }

  .item-list::-webkit-scrollbar {
    width: 7px;
  }

  .item-list::-webkit-scrollbar-thumb {
    background: #90A4AE;
    border-radius: 10px;
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
    flex-shrink: 0;
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
      grid-template-columns: repeat(3, minmax(240px, 1fr));
    }
  }

  @media (max-width: 1100px) {
    .grid-erp {
      grid-template-columns: repeat(2, minmax(240px, 1fr));
    }
  }
`;
