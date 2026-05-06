import Sidebar from "./Sidebar.js";

function dataCompleta(data) {
  return data.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function horaSemSegundos(data) {
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

export default function Layout({ title, icon, breadcrumb, content, subtitle = "" }) {
  const agora = new Date();

  return `
    <div class="app-shell">

      ${Sidebar()}

      <main class="app-main">

        <header class="topbar">

          <button class="mobile-menu-btn">
            ☰
          </button>

          <div class="topbar-left">

            <div class="page-icon">
              <i class="${icon}"></i>
            </div>

            <div>
              <div class="breadcrumb">
                ${breadcrumb.join(" > ")}
              </div>

              <h1>${title}</h1>

              ${subtitle ? `<p>${subtitle}</p>` : ""}
            </div>

          </div>

          <div class="topbar-right">
            <span class="top-date">
              ${dataCompleta(agora)} • ${horaSemSegundos(agora)}
            </span>

            <span class="user-name">
              fabiano
            </span>

            <button class="logout-top">
              Sair
            </button>
          </div>

        </header>

        <div class="page-container page-fade">
          ${content}
        </div>

      </main>

    </div>
  `;
}
