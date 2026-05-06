import Layout from "../components/Layout.js";

let grupos = [
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

let selecionado = null;

function capitalizar(texto) {
  return texto
    .toLowerCase()
    .replace(/\b\w/g, letra => letra.toUpperCase())
    .trim();
}

function ordenarLista(lista, tipo) {
  if (tipo === "dupla") {
    return [...lista].sort((x, y) => x.a.localeCompare(y.a, "pt-BR"));
  }

  return [...lista].sort((x, y) => x.localeCompare(y, "pt-BR"));
}

function renderCadastroGeral() {
  document.getElementById("app").innerHTML = CadastroGeral();
}

window.cadastroSelecionar = function (grupoIndex, itemIndex) {
  selecionado = { grupoIndex, itemIndex };
  renderCadastroGeral();
};

window.cadastroAdicionar = function (grupoIndex) {
  const grupo = grupos[grupoIndex];

  if (grupo.tipo === "dupla") {
    const inputA = document.getElementById(`novo-${grupoIndex}-a`);
    const inputB = document.getElementById(`novo-${grupoIndex}-b`);

    const valorA = capitalizar(inputA.value || "");
    const valorB = (inputB.value || "").trim();

    if (!valorA || !valorB) {
      alert("Preencha as duas colunas antes de lançar.");
      return;
    }

    const existe = grupo.itens.some(item => item.a.toLowerCase() === valorA.toLowerCase());

    if (existe) {
      alert("Este item já está cadastrado.");
      return;
    }

    grupo.itens = ordenarLista([...grupo.itens, { a: valorA, b: valorB }], grupo.tipo);
    selecionado = null;
    renderCadastroGeral();
    return;
  }

  const input = document.getElementById(`novo-${grupoIndex}`);
  const valor = capitalizar(input.value || "");

  if (!valor) {
    alert("Digite um item para lançar.");
    return;
  }

  const existe = grupo.itens.some(item => item.toLowerCase() === valor.toLowerCase());

  if (existe) {
    alert("Este item já está cadastrado.");
    return;
  }

  grupo.itens = ordenarLista([...grupo.itens, valor], grupo.tipo);
  selecionado = null;
  renderCadastroGeral();
};

window.cadastroEditar = function () {
  if (!selecionado) return;

  const grupo = grupos[selecionado.grupoIndex];
  const item = grupo.itens[selecionado.itemIndex];

  const textoAtual = grupo.tipo === "dupla" ? `${item.a} | ${item.b}` : item;
  const novoValor = prompt("Editar item:", textoAtual);

  if (!novoValor) return;

  if (grupo.tipo === "dupla") {
    const partes = novoValor.split("|").map(v => v.trim());

    if (partes.length < 2 || !partes[0] || !partes[1]) {
      alert("Use o formato: valor 1 | valor 2");
      return;
    }

    grupo.itens[selecionado.itemIndex] = {
      a: capitalizar(partes[0]),
      b: partes[1]
    };
  } else {
    grupo.itens[selecionado.itemIndex] = capitalizar(novoValor);
  }

  grupo.itens = ordenarLista(grupo.itens, grupo.tipo);
  selecionado = null;
  renderCadastroGeral();
};

window.cadastroExcluir = function () {
  if (!selecionado) return;
  if (!confirm("Excluir o item selecionado?")) return;

  const grupo = grupos[selecionado.grupoIndex];
  grupo.itens.splice(selecionado.itemIndex, 1);

  selecionado = null;
  renderCadastroGeral();
};

function renderGrupo(grupo, grupoIndex) {
  const selecionadoDoGrupo = selecionado?.grupoIndex === grupoIndex;

  let html = `
    <section class="erp-card">

      <div class="erp-card-header">
        <div>
          <h2>${grupo.titulo}</h2>
          <span>${grupo.itens.length} registros</span>
        </div>

        ${
          selecionadoDoGrupo
            ? `
              <div class="top-actions">
                <button onclick="cadastroEditar()">Editar</button>
                <button onclick="cadastroExcluir()">Excluir</button>
              </div>
            `
            : ""
        }
      </div>
  `;

  if (grupo.tipo === "dupla") {
    html += `
      <div class="insert-line-dupla">
        <input id="novo-${grupoIndex}-a" placeholder="${grupo.colunas[0]}" />
        <input id="novo-${grupoIndex}-b" placeholder="${grupo.colunas[1]}" />
        <button onclick="cadastroAdicionar(${grupoIndex})">+</button>
      </div>

      <div class="dupla-head">
        <strong>${grupo.colunas[0]}</strong>
        <strong>${grupo.colunas[1]}</strong>
      </div>
    `;
  } else {
    html += `
      <div class="insert-line">
        <input
          id="novo-${grupoIndex}"
          placeholder="Novo item..."
          onkeydown="if(event.key === 'Enter') cadastroAdicionar(${grupoIndex})"
        />
        <button onclick="cadastroAdicionar(${grupoIndex})">+</button>
      </div>
    `;
  }

  html += `<div class="item-list">`;

  grupo.itens.forEach((item, itemIndex) => {
    const ativo = selecionado?.grupoIndex === grupoIndex && selecionado?.itemIndex === itemIndex;

    if (grupo.tipo === "dupla") {
      html += `
        <div
          class="item-row-dupla ${ativo ? "selected" : ""}"
          onclick="cadastroSelecionar(${grupoIndex}, ${itemIndex})"
        >
          <span>${item.a}</span>
          <span>${item.b}</span>
        </div>
      `;
    } else {
      html += `
        <div
          class="item-row ${ativo ? "selected" : ""}"
          onclick="cadastroSelecionar(${grupoIndex}, ${itemIndex})"
        >
          <span>${item}</span>
        </div>
      `;
    }
  });

  html += `
      </div>
    </section>
  `;

  return html;
}

export default function CadastroGeral() {
  const content = `
    <style>
      .cadastro-wrap {
        width: 100%;
        max-width: 1260px;
        margin: 0 auto;
      }

      .grid-erp {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
        gap: 12px;
        align-items: start;
      }

      .erp-card {
        background: rgba(236,239,241,.96);
        border: 1px solid #90A4AE;
        border-radius: 14px;
        padding: 11px;
        box-shadow: 0 8px 18px rgba(38,50,56,.10);
        min-height: 312px;
        max-width: 255px;
        width: 100%;
      }

      .erp-card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 6px;
        border-bottom: 1px solid #B0BEC5;
        padding-bottom: 7px;
        margin-bottom: 9px;
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
      }

      .insert-line-dupla {
        display: grid;
        grid-template-columns: 1fr 58px 34px;
        gap: 5px;
        margin-bottom: 8px;
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
      }

      .item-list {
        max-height: 218px;
        overflow-y: auto;
        padding-right: 3px;
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
    </style>

    <div class="cadastro-wrap">
      <div class="grid-erp">
        ${grupos.map((grupo, index) => renderGrupo(grupo, index)).join("")}
      </div>
    </div>
  `;

  return Layout({
    title: "Cadastro Geral",
    subtitle: "Bases usadas nas validações, listas suspensas e cadastros do sistema",
    icon: "fas fa-database",
    breadcrumb: ["Cadastro", "Cadastro Geral"],
    content
  });
}
@media (max-width: 768px) {

  .grid-erp {
    grid-template-columns: 1fr !important;
    justify-content: center;
  }

  .erp-card {
    width: 100% !important;
    max-width: 100%;
    height: auto;
    min-height: auto;
  }

  .item-list {
    max-height: 220px;
  }

}
