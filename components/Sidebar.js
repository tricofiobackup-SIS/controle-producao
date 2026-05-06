export default function Sidebar() {
  return `
  
    <aside class="sidebar">

      <a href="#" class="logo-strip">
        <img
          src="./public/logo-tricofio.png"
          class="logo"
          alt="Tricofio"
        />
      </a>

      <div class="menu-area">

        <div class="system-name">
          Controle Produção
        </div>

        <nav>

          <!-- CADASTRO -->

          <div class="menu-group">

            <button class="menu-title menu-open">

              <span class="menu-left">
                <span class="menu-icon">▦</span>
                <span>Cadastro</span>
              </span>

              <span class="arrow">▾</span>

            </button>

            <div class="submenu submenu-open">

              <a href="#" class="submenu-link">
                Ficha Cadastro
              </a>

              <a href="#" class="submenu-link active">
                Cadastro Geral
              </a>

              <a href="#" class="submenu-link">
                Ficha Técnica
              </a>

              <a href="#" class="submenu-link">
                Combinações
              </a>

            </div>

          </div>

          <!-- O.S -->

          <div class="menu-group">

            <button class="menu-title">

              <span class="menu-left">
                <span class="menu-icon">▤</span>
                <span>O.S</span>
              </span>

              <span class="arrow">▸</span>

            </button>

          </div>

          <!-- FIOS -->

          <div class="menu-group">

            <button class="menu-title">

              <span class="menu-left">
                <span class="menu-icon">◈</span>
                <span>Fios</span>
              </span>

              <span class="arrow">▸</span>

            </button>

          </div>

          <!-- CONSULTAS -->

          <div class="menu-group">

            <button class="menu-title">

              <span class="menu-left">
                <span class="menu-icon">⌕</span>
                <span>Consultas</span>
              </span>

              <span class="arrow">▸</span>

            </button>

          </div>

          <!-- CONFIG -->

          <div class="menu-group">

            <button class="menu-title">

              <span class="menu-left">
                <span class="menu-icon">⚙</span>
                <span>Configurações</span>
              </span>

              <span class="arrow">▸</span>

            </button>

          </div>

        </nav>

      </div>

    </aside>

  `;
}
