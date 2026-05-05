export default function Layout({ title, icon, breadcrumb, content }) {
  return `
    <div class="page fade-in">

      <div class="header">
        <div class="header-left">
          <i class="${icon}"></i>
          <h1>${title}</h1>
        </div>

        <div class="breadcrumb">
          ${breadcrumb.join(" > ")}
        </div>
      </div>

      <div class="content">
        ${content}
      </div>

    </div>
  `;
}
