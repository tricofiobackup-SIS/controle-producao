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
  const [selecionado, setSelecionado] = useState(null);

  function capitalizar(texto) {
    return texto
      .toLowerCase()
      .replace(/\b\w/g, (letra) => letra.toUpperCase())
      .trim();
  }

  function ordenarLista(lista, tipo) {
    if (tipo === "dupla") {
      return [...lista].sort((x, y) => x.a.localeCompare(y.a, "pt-BR"));
    }

    return [...lista].sort((x, y) => x.localeCompare(y, "pt-BR"));
  }

  function chaveItem(grupo, item, index) {
    if (grupo.tipo === "dupla") return `${grupo.titulo}-${item.a}-${item.b}-${index}`;
    return `${grupo.titulo}-${item}-${index}`;
  }

  function limparSelecao() {
    setSelecionado(null);
  }

  function adicionarItem(grupo) {
    const titulo = grupo.titulo;

    if (grupo.tipo === "dupla") {
      const valorA = capitalizar(novos[titulo]?.a || "");
      const valorB = (novos[titulo]?.b || "").trim();

      if (!valorA || !valorB) {
        alert("Preencha as duas colunas antes de lançar.");
        return;
      }

      const jaExiste = grupo.itens.some(
        (item) => item.a.toLowerCase() === valorA.toLowerCase()
      );

      if (jaExiste) {
        alert("Este item já está cadastrado.");
        return;
      }

      setGrupos(grupos.map(g =>
        g.titulo === titulo
          ? { ...g, itens: ordenarLista([...g.itens, { a: valorA, b: valorB }], g.tipo) }
          : g
      ));

      setNovos({ ...novos, [titulo]: { a: "", b: "" } });
      setSelecionado(null);
      return;
    }

    const valor = capitalizar(novos[titulo] || "");

    if (!valor) {
      alert("Digite um item para lançar.");
      return;
    }

    const jaExiste = grupo.itens.some(
      (item) => item.toLowerCase() === valor.toLowerCase()
    );

    if (jaExiste) {
      alert("Este item já está cadastrado.");
      return;
    }

    setGrupos(grupos.map(g =>
      g.titulo === titulo
        ? { ...g, itens: ordenarLista([...g.itens, valor], g.tipo) }
        : g
    ));

    setNovos({ ...novos, [titulo]: "" });
    setSelecionado(null);
  }

  function excluirSelecionado() {
    if (!selecionado) return;
    if (!confirm("Excluir o item selecionado?")) return;

    setGrupos(grupos.map(g => {
      if (g.titulo !== selecionado.grupo) return g;

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
          alert("Use o formato: valor 1 | valor 2");
          return g;
        }

        const novaLista = g.itens.map((item, index) =>
          chaveItem(g, item, index) === selecionado.chave
            ? { a: capitalizar(partes[0]), b: partes[1] }
            : item
        );

        return { ...g, itens: ordenarLista(novaLista, g.tipo) };
      }

      const novaLista = g.itens.map((item, index) =>
        chaveItem(g, item, index) === selecionado.chave
          ? capitalizar(novoValor)
          : item
      );

      return { ...g, itens: ordenarLista(novaLista, g.tipo) };
    }));

    setSelecionado(null);
  }

  return (
    <Layout>
      <style>{css}</style>

      <div className="cadastro-wrap">
        <div className="grid-erp">
          {grupos.map((grupo) => {
            const itemSelecionadoDoGrupo = selecionado?.grupo === grupo.titulo;

            return (
              <section className="erp-card" key={grupo.titulo}>
                <div className="erp-card-header">
                  <div>
                    <h2>{grupo.titulo}</h2>
                    <span>{grupo.itens.length} registros</span>
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
                      onFocus={limparSelecao}
                      onChange={(e) => {
                        limparSelecao();
                        setNovos({
                          ...novos,
                          [grupo.titulo]: {
                            ...(novos[grupo.titulo] || {}),
                            a: e.target.value
                          }
                        });
                      }}
                    />

                    <input
                      placeholder={grupo.colunas[1]}
                      value={novos[grupo.titulo]?.b || ""}
                      onFocus={limparSelecao}
                      onChange={(e) => {
                        limparSelecao();
                        setNovos({
                          ...novos,
                          [grupo.titulo]: {
                            ...(novos[grupo.titulo] || {}),
                            b: e.target.value
                          }
                        });
                      }}
                    />

                    <button onClick={() => adicionarItem(grupo)}>+</button>
                  </div>
                ) : (
                  <div className="insert-line">
                    <input
                      placeholder="Novo item..."
                      value={novos[grupo.titulo] || ""}
                      onFocus={limparSelecao}
                      onChange={(e) => {
                        limparSelecao();
                        setNovos({ ...novos, [grupo.titulo]: e.target.value });
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") adicionarItem(grupo);
                      }}
                    />

                    <button onClick={() => adicionarItem(grupo)}>+</button>
                  </div>
                )}

                {grupo.tipo === "dupla" && (
                  <div className="dupla-head">
                    <strong>{grupo.colunas[0]}</strong>
                    <strong>{grupo.colunas[1]}</strong>
                  </div>
                )}

                <div className="item-list">
                  {grupo.itens.map((item, index) => {
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
      </div>
    </Layout>
  );
}

const css = `
  .cadastro-wrap {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  .grid-erp {
    display: grid;
    grid-template-columns: repeat(auto-fill, 242px);
    gap: 14px;
    align-items: start;
    justify-content: start;
  }

  .erp-card {
    background: rgba(236,239,241,.96);
    border: 1px solid #90A4AE;
    border-radius: 14px;
    padding: 11px;
    box-shadow: 0 8px 18px rgba(38,50,56,.10);
    width: 242px;
    height: 312px;
    display: flex;
    flex-direction: column;
  }

  .erp-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 6px;
    border-bottom: 1px solid #B0BEC5;
    padding-bottom: 7px;
    margin-bottom: 9px;
    min-height: 38px;
  }

  .erp-card-header h2 {
    font-size: 13px;
    margin: 0;
    color: #263238;
    line-height: 1.1;
  }

  .erp-card-header span {
    display: block;
    font-size: 10px;
    color: #607D8B;
    margin-top: 2px;
  }

  .top-actions {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
  }

  .top-actions button {
    border: 1px solid #90A4AE;
    background: #FFFFFF;
    color: #455A64;
    border-radius: 7px;
    padding: 3px 6px;
    font-size: 10px;
    cursor: pointer;
    font-weight: 600;
  }

  .top-actions button:last-child {
    background: #455A64;
    color: #FFFFFF;
  }

  .insert-line {
    display: grid;
    grid-template-columns: 1fr 34px;
    gap: 6px;
    margin-bottom: 8px;
    flex-shrink: 0;
  }

  .insert-line-dupla {
    display: grid;
    grid-template-columns: 1fr 58px 34px;
    gap: 5px;
    margin-bottom: 8px;
    flex-shrink: 0;
  }

  .insert-line input,
  .insert-line-dupla input {
    height: 31px;
    border-radius: 8px;
    border: 1px solid #90A4AE;
    padding: 0 8px;
    min-width: 0;
    font-size: 11.5px;
  }

  .insert-line button,
  .insert-line-dupla button {
    height: 31px;
    border: 0;
    border-radius: 8px;
    background: #607D8B;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
  }

  .dupla-head {
    display: grid;
    grid-template-columns: 1fr 62px;
    gap: 6px;
    background: #CFD8DC;
    color: #263238;
    border-radius: 8px;
    padding: 6px 8px;
    margin-bottom: 5px;
    font-size: 11px;
    flex-shrink: 0;
  }

  .item-list {
    flex: 1;
    overflow-y: auto;
    padding-right: 3px;
    min-height: 0;
  }

  .item-list::-webkit-scrollbar {
    width: 5px;
  }

  .item-list::-webkit-scrollbar-thumb {
    background: #90A4AE;
    border-radius: 10px;
  }

  .item-row,
  .item-row-dupla {
    border-bottom: 1px solid #CFD8DC;
    font-size: 11.4px;
    color: #263238;
    cursor: pointer;
    transition: .15s;
  }

  .item-row {
    padding: 6px 4px;
  }

  .item-row-dupla {
    display: grid;
    grid-template-columns: 1fr 62px;
    gap: 6px;
    padding: 6px 8px;
  }

  .item-row:hover,
  .item-row-dupla:hover {
    background: #DDE6EA;
    border-radius: 7px;
  }

  .selected {
    background: #607D8B !important;
    color: #FFFFFF;
    border-radius: 7px;
    padding-left: 8px;
    font-weight: 600;
  }
`;
