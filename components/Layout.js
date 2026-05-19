import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <style>{globalCss}</style>

      <div className="app-shell">
        <Sidebar />
        <main className="app-main">{children}</main>
      </div>
    </>
  );
}

const globalCss = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    margin: 0;
    min-height: 100%;
    font-family: 'Montserrat', Arial, sans-serif;
    background: #B0BEC5;
    color: #263238;
  }

  .app-shell {
    display: flex;
    min-height: 100vh;
    width: 100%;
    background: #B0BEC5;
  }

  .app-main {
    flex: 1;
    min-height: 100vh;
    padding: 32px;
    overflow: auto;
    background: #B0BEC5;
  }

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 600;
    color: #263238;
    letter-spacing: .2px;
  }

  h2 {
    margin: 0 0 16px;
    font-size: 18px;
    font-weight: 600;
    color: #263238;
  }

  .subtitle {
    margin-top: 8px;
    color: #455A64;
    font-size: 13px;
  }

  .card {
    background: #ECEFF1;
    border: 1px solid #90A4AE;
    border-radius: 18px;
    padding: 22px;
    box-shadow: 0 12px 28px rgba(38, 50, 56, .10);
  }

  input,
  select,
  textarea {
    border: 1px solid #90A4AE;
    border-radius: 10px;
    background: #FFFFFF;
    color: #263238;
    height: 38px;
    padding: 0 12px;
    font-family: inherit;
    outline: none;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: #607D8B;
    box-shadow: 0 0 0 3px rgba(96, 125, 139, .22);
  }

  button {
    font-family: inherit;
  }

  .primary-btn {
    background: #607D8B;
    color: #FFFFFF;
    border: 0;
    border-radius: 10px;
    padding: 11px 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .secondary-btn {
    background: #ECEFF1;
    color: #263238;
    border: 1px solid #90A4AE;
    border-radius: 10px;
    padding: 10px 14px;
    font-weight: 600;
    cursor: pointer;
  }

  .danger-btn {
    background: #455A64;
    color: #FFFFFF;
    border: 0;
    border-radius: 10px;
    padding: 11px 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .primary-btn:hover,
  .secondary-btn:hover,
  .danger-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(38, 50, 56, .18);
  }
`;
