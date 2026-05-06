import { useState } from "react";
import Layout from "../components/Layout";

const dadosIniciais = [
  {
    titulo: "Tecelões",
    itens: [
      "André",
      "Carla",
      "Diego",
      "Fabricio",
      "Fernando",
      "Josué",
      "Reginaldo"
    ]
  },
  {
    titulo: "Coleções",
    itens: [
      "Inverno 2025",
      "Verão 2025",
      "Inverno 2026",
      "Verão 2026"
    ]
  },
  {
    titulo: "Combinações",
    itens: [
      "Comb1",
      "Comb2",
      "Comb3",
      "Comb4"
    ]
  },
  {
    titulo: "Clientes",
    itens: [
      "Galeria Tricot",
      "Tricôfio",
      "Elly"
    ]
  }
];

export default function CadastroGeral() {
  const [grupos, setGrupos] = useState(dadosIniciais);
  const [selecionado, setSelecionado] = useState(null);

  function capitalizar(texto) {
    return texto
      .toLowerCase()
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .trim();
  }

  function adicionar(grupoIndex) {
    const valor = prompt("Novo item:");

    if (!valor) return;

    const texto = capitalizar(valor);

    const novos = [...grupos];

    const existe = novos[grupoIndex].itens.some(
      (i) => i.toLowerCase() === texto.toLowerCase()
    );

    if (existe) {
      alert("Item já cadastrado.");
      return;
    }

    novos[grupoIndex].itens.push(texto);

    novos[grupoIndex].itens.sort((a, b) =>
      a.localeCompare(b, "pt-BR")
    );

    setGrupos(novos);
  }

  function editar() {
    if (!selecionado) return;

    const atual =
      grupos[selecionado.grupo].itens[
        selecionado.item
      ];

    const novo = prompt("Editar item:", atual);

    if (!novo) return;

    const novos = [...grupos];

    novos[selecionado.grupo].itens[
      selecionado.item
    ] = capitalizar(novo);

    setGrupos(novos);
  }

  function excluir() {
    if (!selecionado) return;

    if (!confirm("Excluir item?")) return;

    const novos = [...grupos];

    novos[selecionado.grupo].itens.splice(
      selecionado.item,
      1
    );

    setGrupos(novos);

    setSelecionado(null);
  }

  return (
    <Layout>
      <div className="cadastro-wrap">

        <div className="grid-erp">

          {grupos.map((grupo, grupoIndex) => (

            <section
              className="erp-card"
              key={grupo.titulo}
            >

              <div className="erp-card-header">

                <div>
                  <h2>{grupo.titulo}</h2>

                  <span>
                    {grupo.itens.length} registros
                  </span>
                </div>

                {selecionado?.grupo === grupoIndex && (
                  <div className="top-actions">
                    <button onClick={editar}>
                      Editar
                    </button>

                    <button onClick={excluir}>
                      Excluir
                    </button>
                  </div>
                )}

              </div>

              <div className="insert-line">
                <button
                  onClick={() => adicionar(grupoIndex)}
                >
                  + Novo
                </button>
              </div>

              <div className="item-list">

                {grupo.itens.map((item, itemIndex) => (

                  <div
                    key={itemIndex}
                    className={`item-row ${
                      selecionado?.grupo === grupoIndex &&
                      selecionado?.item === itemIndex
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setSelecionado({
                        grupo: grupoIndex,
                        item: itemIndex
                      })
                    }
                  >
                    {item}
                  </div>

                ))}

              </div>

            </section>

          ))}

        </div>

      </div>
    </Layout>
  );
}
