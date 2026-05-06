import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Sidebar({ abertoMobile, fecharMobile }) {
  const router = useRouter();

  const menus = [
    {
      titulo: "Cadastro",
      icon: "▣",
      itens: [
        { nome: "Ficha Cadastro", link: "/modelos" },
        { nome: "Cadastro Geral", link: "/cadastro-geral" },
        { nome: "Ficha Técnica", link: "#" },
        { nome: "Combinações", link: "#" }
      ]
    },
    {
      titulo: "O.S",
      icon: "▤",
      itens: [
        { nome: "Lançar O.S", link: "#" },
        { nome: "Consulta Produção", link: "#" }
      ]
    },
    {
      titulo: "Fios",
      icon: "◈",
      itens: [
        { nome: "Cadastro de Fio", link: "#" },
        { nome: "Estoque de Fios", link: "#" }
      ]
    },
    {
      titulo: "Consultas",
      icon: "⌕",
      itens: [
        { nome: "Ficha Consulta", link: "#" },
        { nome: "Relatório Estoque", link: "#" }
      ]
    }
  ];

  const menuInicial =
    menus.find((m) =>
      m.itens.some((i) => i.link === router.pathname)
    )?.titulo || "Cadastro";

  const [menuAberto, setMenuAberto] = useState(menuInicial);

  useEffect(() => {
    const atual = menus.find((m) =>
      m.itens.some((i) => i.link === router.pathname)
    );

    if (atual) {
      setMenuAberto(atual.titulo);
    }
  }, [router.pathname]);

  function ativo(link) {
    return router.pathname === link;
  }

  function navegar(link) {
    if (link === "#") return;

    router.push(link);

    if (fecharMobile) {
      fecharMobile();
    }
  }

  return (
    <aside className={`sidebar ${abertoMobile ? "sidebar-mobile-open" : ""}`}>
      <div className="logo-card">
        <img
          src="/logo-tricofio.png"
          className="logo"
          alt="Tricofio"
        />
      </div>

      <div className="system-name">
        Controle Produção
      </div>

      <nav>
        {menus.map((menu) => (
          <div className="menu-group" key={menu.titulo}>
            <button
              className={`menu-title ${
                menuAberto === menu.titulo ? "menu-open" : ""
              }`}
              onClick={() =>
                setMenuAberto(
                  menuAberto === menu.titulo ? null : menu.titulo
                )
              }
            >
              <span className="menu-left">
                <span className="menu-icon">
                  {menu.icon}
                </span>

                <span>{menu.titulo}</span>
              </span>

              <span className="arrow">
                {menuAberto === menu.titulo ? "▾" : "▸"}
              </span>
            </button>

            <div
              className={`submenu ${
                menuAberto === menu.titulo
                  ? "submenu-open"
                  : ""
              }`}
            >
              {menu.itens.map((item) => (
                <button
                  key={item.nome}
                  onClick={() => navegar(item.link)}
                  className={`submenu-link ${
                    ativo(item.link) ? "active" : ""
                  }`}
                >
                  {item.nome}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
