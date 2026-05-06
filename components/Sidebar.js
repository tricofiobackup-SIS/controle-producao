export default function Sidebar() {
  return `
    <aside class="sidebar">

      <div class="logo-card">
        <img
          src="./public/logo-tricofio.png"
          class="logo"
          alt="Tricofio"
        />
      </div>

      <div class="system-name">
        Controle Produção
      </div>

      <nav>

        <div class="menu-group">
          <button class="menu-title menu-open">
            <span class="menu-left">
              <span class="menu-icon">▣</span>
              <span>Cadastro</span>
            </span>
            <span class="arrow">▾</span>
          </button>

          <div class="submenu submenu-open">
            <a href="#" class="submenu-link">Ficha Cadastro</a>
            <a href="#" class="submenu-link active">Cadastro Geral</a>
            <a href="#" class="submenu-link">Ficha Técnica</a>
            <a href="#" class="submenu-link">Combinações</a>
          </div>
        </div>

        <div class="menu-group">
          <button class="menu-title">
            <span class="menu-left">
              <span class="menu-icon">▤</span>
              <span>O.S</span>
            </span>
            <span class="arrow">▸</span>
          </button>

          <div class="submenu">
            <a href="#" class="submenu-link">Lançar O.S</a>
            <a href="#" class="submenu-link">Consulta Produção</a>
          </div>
        </div>

        <div class="menu-group">
          <button class="menu-title">
            <span class="menu-left">
              <span class="menu-icon">◈</span>
              <span>Fios</span>
            </span>
            <span class="arrow">▸</span>
          </button>

          <div class="submenu">
            <a href="#" class="submenu-link">Cadastro de Fio</a>
            <a href="#" class="submenu-link">Estoque de Fios</a>
          </div>
        </div>

        <div class="menu-group">
          <button class="menu-title">
            <span class="menu-left">
              <span class="menu-icon">⌕</span>
              <span>Consultas</span>
            </span>
            <span class="arrow">▸</span>
          </button>

          <div class="submenu">
            <a href="#" class="submenu-link">Ficha Consulta</a>
            <a href="#" class="submenu-link">Relatório Estoque</a>
          </div>
        </div>

      </nav>

    </aside>
  `;
}
