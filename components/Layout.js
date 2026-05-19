import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const salvo = localStorage.getItem("user");

    if (!salvo) {
      router.push("/login");
      return;
    }

    setUser(JSON.parse(salvo));
    setCarregando(false);
  }, []);

  function sair() {
    localStorage.removeItem("user");
    router.push("/login");
  }

  if (carregando) return null;

  return (
    <>
      <style>{globalCss}</style>

      <div className="app-shell">
        <Sidebar />

        <main className="app-main">
          <div className="top-user">
            <div>
              <span>{user?.tipo === "admin" ? "Administrador" : "Visitante"}</span>
              <strong>{user?.nome}</strong>
            </div>

            <button onClick={sair}>Sair</button>
          </div>

          <div className="page-container">
            {children}
          </div>
        </main>
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
    color: #263238;
  }

  body {
    background:
      radial-gradient(circle at top left, rgba(236,239,241,.55), transparent 34%),
      linear-gradient(135deg, #B0BEC5 0%, #90A4AE 45%, #607D8B 100%);
  }

  .app-shell {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  .app-main {
    flex: 1;
    min-height: 100vh;
    padding: 28px;
    overflow: auto;
    background:
      radial-gradient(circle at top right, rgba(236,239,241,.65), transparent 32%),
      linear-gradient(135deg, #ECEFF1 0%, #B0BEC5 48%, #90A4AE 100%);
    position: relative;
  }

  .page-container {
    padding-top: 68px;
  }

  .top-user {
    position: absolute;
    top: 22px;
    right: 28px;
    background: rgba(236,239,241,.92);
    border: 1px solid #B0BEC5;
    border-radius: 16px;
    padding: 9px 12px;
    display: flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 12px 28px rgba(38,50,56,.16);
    backdrop-filter: blur(10px);
  }

  .top-user div {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
  }

  .top-user span {
    font-size: 11px;
    color: #607D8B;
    font-weight: 600;
  }

  .top-user strong {
    font-size: 13px;
    color: #263238;
  }

  .top-user button {
    border: 0;
    background: #263238;
    color: #fff;
    border-radius: 10px;
    padding: 8px 12px;
    font-weight: 600;
    cursor: pointer;
  }

  .top-user button:hover {
    background: #607D8B;
  }

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
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
    background: rgba(236,239,241,.94);
    border: 1px solid #90A4AE;
    border-radius: 18px;
    padding: 22px;
    box-shadow: 0 12px 28px rgba(38,50,56,.12);
    backdrop-filter: blur(8px);
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
    box-shadow: 0 0 0 3px rgba(96,125,139,.22);
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
`;
