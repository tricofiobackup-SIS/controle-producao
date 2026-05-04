import { useState } from "react";
import Layout from "../components/Layout";

export default function CadastroGeral() {
  const gruposIniciais = [
    {
      titulo: "Partes Modelos",
      tipo: "lista",
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
    { titulo: "Tecelões", tipo: "lista", itens: ["André", "Carla", "Diego", "Fabricio", "Fernando", "Jose Claudio", "Josué", "Mac", "Maicon", "Reginaldo", "Roberto Negao", "Rovani", "Valdemir"] },
    { titulo: "Coleções", tipo: "lista", itens: ["Inverno 2025", "Verão 2025", "Inverno 2026", "Verão 2026"] },
    { titulo: "Acessórios", tipo: "lista", itens: ["Botões", "Colchetes", "Cordão", "Flor", "Forro Carolina Textil", "Forro Mamut", "Ponteira", "Ziper"] },
    { titulo: "Máquinas", tipo: "lista", itens: ["122-6", "234-7", "MACH-2", "NSSG-14", "NSSG-7", "SES-12", "SIR-14", "SIR-7", "SSG-14", "SSR-14", "SSR-7", "SVR-14", "SWG-8"] },
    { titulo: "Programador", tipo: "lista", itens: ["Delei"] },
    { titulo: "Tamanhos", tipo: "lista", itens: ["PP", "P", "M", "G", "GG"] },
    { titulo: "Fornecedores", tipo: "lista", itens: ["Acerto Estoque", "André - Devolução", "Avelã", "Bianca Fios", "Comexport", "Fiação Fides", "Incomfio", "Luma", "Minas Lã", "Modefios", "Palacio Das Lans", "Paramount", "Polo Armarinhos", "R.A Aviamentos", "Top Fios"] },
    { titulo: "Combinações", tipo: "lista", itens: ["Comb1", "Comb2", "Comb3", "Comb4", "Comb5", "Comb6", "Comb7", "Comb8"] },
    { titulo: "Clientes", tipo: "lista", itens: ["Elly", "Galeria Tricot", "Tricôfio"] },
    {
      titulo: "Peso Cones",
      tipo: "dupla",
      colunas: ["Fio", "Peso"],
      itens: [
        { a: "Cashemire Light", b: "0,040" },
        { a: "Fiore", b: "0,040" },
        { a: "Fresh Liner", b: "0,060" },
        { a: "Hb Lã", b: "0,040" },
        { a: "Jolie", b: "0,040" },
        { a: "Linha 2/28", b: "0,040" },
        { a: "Poliamida", b: "0,060" },
        { a: "Poliester Costura", b: "0,060" },
        { a: "Polyester", b: "0,060" },
        { a: "Rayon Flex", b: "0,040" },
        { a: "Rayon Pp", b: "0,209" },
        { a: "Rayon V Ret", b: "0,040" },
        { a: "Serido", b: "0,040" },
        { a: "Solar", b: "0,040" },
        { a: "Veranel Bright", b: "0,040" },
        { a: "Viscose", b: "0,040" },
        { a: "York Soft", b: "0,040" }
      ]
    },
    {
      titulo: "NCMs",
      tipo: "dupla",
      colunas: ["Tipo", "NCM"],
      itens: [
        { a: "Blusa", b: "61069000" },
        { a: "Calça", b: "61046900" },
        { a: "Casaco", b: "61043900" },
        { a: "Colete", b: "61069000" },
        { a: "Cropped", b: "61069000" },
        { a: "Jaqueta", b: "61043900" },
        { a: "Macacão", b: "61122000" },
        { a: "Regata", b: "61066900" },
        { a: "Saia", b: "61044900" },
        { a: "Shorts", b: "61046900" },
        { a: "Top", b: "61069000" },
        { a: "Twinset", b: "61043900" },
        { a: "Vestido", b: "61043900" }
      ]
    }
  ];

  const [grupos, setGrupos] = useState(gruposIniciais);
  const [novos, setNovos] = useState({});
  const [busca, setBusca] = useState("");
  const [selecionado, setSelecionado] = useState(null);

  function chaveItem(grupo, item, index) {
    if (grupo.tipo === "dupla") return `${grupo.titulo}-${item.a}-${item.b}-${index}`;
    return `${grupo.titulo}-${item}-${index}`;
  }

  function adicionarItem(grupo) {
    const titulo = grupo.titulo;

    if (grupo.tipo === "dupla") {
      const valorA = (novos[titulo]?.a || "").trim();
      const valorB = (novos[titulo]?.b || "").trim();

      if (!valorA || !valorB) {
        alert("Preencha as duas colunas antes de lançar.");
        return;
      }

      setGrupos(grupos.map(g =>
        g.titulo === titulo
          ? { ...g, itens: [...g.itens, { a: valorA, b: valorB }] }
          : g
      ));

      setNovos({ ...novos, [titulo]: { a: "", b: "" } });
      return;
    }

    const valor = (novos[titulo] || "").trim();

    if (!valor) {
      alert("Digite um item para lançar.");
      return;
    }

    setGrupos(grupos.map(g =>
      g.titulo === titulo ? { ...g, itens: [...g.itens, valor] } : g
    ));

    setNovos({ ...novos, [titulo]: "" });
  }

  function excluirSelecionado() {
    if (!selecionado) return;

    if (!confirm("Excluir o item selecionado?")) return;

    setGrupos(grupos.map(g => {
      if (g.titulo !== selecionado.grupo) return g;

      if (g.tipo === "dupla") {
        return {
          ...g,
          itens: g.itens.filter((item, index) =>
            chaveItem(g, item, index) !== selecionado.chave
          )
        };
      }

      return {
        ...g,
        itens: g.itens.filter((item, index) =>
          chaveItem(g, item, index) !== selecionado.chave
        )
      };
    }));

    setSelecionado(null);
  }

  function editarSelecionado() {
    if (!selecionado) return;

    const novoValor = prompt("Editar item:", selecionado.texto);

    if (!novoValor) return;

    setGrupos(grupos.map(g => {
      if (g.titulo !== selecionado.grupo) return g;

      if (g.tipo === "dupla") {
        const partes = novoValor.split("|").map(v => v.trim());

        if (partes.length < 2 || !partes[0] || !partes[1]) {
          alert("Para editar este item, use o formato: valor 1 | valor 2");
          return g;
        }

        return {
          ...g,
          itens: g.itens.map((item, index) =>
            chaveItem(g, item, index) === selecionado.chave
              ? { a: partes[0], b: partes[1] }
              : item
          )
        };
      }

      return {
        ...g,
        itens: g.itens.map((item, index) =>
          chaveItem(g, item, index) === selecionado.chave ? novoValor : item
        )
      };
    }));

    setSelecionado(null);
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
          const itensFiltrados = grupo.itens.filter(item => {
            const texto = grupo.tipo === "dupla" ? `${item.a} ${item.b}` : item;
            return texto.toLowerCase().includes(busca.toLowerCase());
          });

          const itemSelecionadoDoGrupo = selecionado?.grupo === grupo.titulo;

          return (
            <section className="erp-card" key={grupo.titulo}>
              <div className="erp-card-header">
                <div>
                  <h2>{grupo.titulo}</h2>
                  <span>{itensFiltrados.length} registros</span>
                </div>

                {itemSelecionadoDoGrupo && (
                  <div className="top-actions">
                    <button onClick={editarSelecionado}>Editar</button>
                    <button onClick={excluirSelecionado}>Excluir</button>
                  </div>
                )}
              </div>

              {grupo.tipo === "dupla" ? (
                <div className="insert-line-dupla">
                  <input
                    placeholder={grupo.colunas[0]}
                    value={novos[grupo.titulo]?.a || ""}
                    onChange={(e) =>
                      setNovos({
                        ...novos,
                        [grupo.titulo]: {
                          ...(novos[grupo.titulo] || {}),
                          a: e.target.value
                        }
                      })
                    }
                  />

                  <input
                    placeholder={grupo.colunas[1]}
                    value={novos[grupo.titulo]?.b || ""}
                    onChange={(e) =>
                      setNovos({
                        ...novos,
                        [grupo.titulo]: {
                          ...(novos[grupo.titulo] || {}),
                          b: e.target.value
                        }
                      })
                    }
                  />

                  <button onClick={() => adicionarItem(grupo)}>Lançar</button>
                </div>
              ) : (
                <div className="insert-line">
                  <input
                    placeholder="Novo item..."
                    value={novos[grupo.titulo] || ""}
                    onChange={(e) =>
                      setNovos({ ...novos, [grupo.titulo]: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") adicionarItem(grupo);
                    }}
                  />

                  <button onClick={() => adicionarItem(grupo)}>Lançar</button>
                </div>
              )}

              {grupo.tipo === "dupla" && (
                <div className="dupla-head">
                  <strong>{grupo.colunas[0]}</strong>
                  <strong>{grupo.colunas[1]}</strong>
                </div>
              )}

              <div className="item-list">
                {itensFiltrados.map((item, index) => {
                  const chave = chaveItem(grupo, item, index);
                  const ativo = selecionado?.chave === chave;
                  const texto = grupo.tipo === "dupla" ? `${item.a} | ${item.b}` : item;

                  return grupo.tipo === "dupla" ? (
                    <div
                      className={ativo ? "item-row-dupla selected" : "item-row-dupla"}
                      key={chave}
                      onClick={() =>
                        setSelecionado({
                          grupo: grupo.titulo,
                          chave,
                          texto
                        })
                      }
                    >
                      <span>{item.a}</span>
                      <span>{item.b}</span>
                    </div>
                  ) : (
                    <div
                      className={ativo ? "item-row selected" : "item-row"}
                      key={chave}
                      onClick={() =>
                        setSelecionado({
                          grupo: grupo.titulo,
                          chave,
                          texto
                        })
                      }
                    >
                      <span>{item}</span>
                    </div>
                  );
                })}
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
    grid-template-columns: repeat(4, minmax(245px, 1fr));
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
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
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

  .top-actions {
    display: flex;
    gap: 6px;
  }

  .top-actions button {
    border: 1px solid #90A4AE;
    background: #FFFFFF;
    color: #455A64;
    border-radius: 8px;
    padding: 5px 8px;
    font-size: 11px;
    cursor: pointer;
    font-weight: 600;
  }

  .top-actions button:last-child {
    background: #455A64;
    color: #FFFFFF;
  }

  .insert-line {
    display: grid;
    grid-template-columns: 1fr 78px;
    gap: 8px;
    margin-bottom: 12px;
  }

  .insert-line-dupla {
    display: grid;
    grid-template-columns: 1fr 80px 74px;
    gap: 8px;
    margin-bottom: 12px;
  }

  .insert-line input,
  .insert-line-dupla input {
    height: 36px;
    border-radius: 10px;
    border: 1px solid #90A4AE;
    padding: 0 10px;
    min-width: 0;
  }

  .insert-line button,
  .insert-line-dupla button {
    border: 0;
    border-radius: 10px;
    background: #607D8B;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }

  .dupla-head {
    display: grid;
    grid-template-columns: 1fr 90px;
    gap: 10px;
    background: #CFD8DC;
    color: #263238;
    border-radius: 10px;
    padding: 8px 10px;
    margin-bottom: 6px;
    font-size: 12px;
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

  .item-row,
  .item-row-dupla {
    border-bottom: 1px solid #CFD8DC;
    font-size: 12.5px;
    color: #263238;
    cursor: pointer;
    transition: .15s;
  }

  .item-row {
    padding: 8px 6px;
  }

  .item-row-dupla {
    display: grid;
    grid-template-columns: 1fr 90px;
    gap: 10px;
    padding: 8px 10px;
  }

  .item-row:hover,
  .item-row-dupla:hover {
    background: #DDE6EA;
    border-radius: 8px;
  }

  .selected {
    background: #607D8B !important;
    color: #FFFFFF;
    border-radius: 8px;
    padding-left: 10px;
    font-weight: 600;
  }

  @media (max-width: 1500px) {
    .grid-erp {
      grid-template-columns: repeat(3, minmax(245px, 1fr));
    }
  }

  @media (max-width: 1100px) {
    .grid-erp {
      grid-template-columns: repeat(2, minmax(245px, 1fr));
    }
  }
`;
