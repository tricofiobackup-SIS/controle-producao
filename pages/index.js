import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [agora, setAgora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  return (
    <Layout titulo="Tela Inicial" subtitulo="Sistema interno Tricofio">
      <style>{css}</style>

      <div className="home-hero">
        <div>
          <h2>Bem-vindo ao sistema</h2>
          <p>Gestão de produção, modelos, fios, ordens de serviço e consultas.</p>
        </div>

        <div className="home-brand">
          <img src="/logo-tricofio.png" className="home-logo" alt="Tricofio" />

          <div className="home-date">
            <strong>{dataCompleta(agora)}</strong>
            <span>{horaSemSegundos(agora)}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const css = `
  .home-hero {
    min-height: calc(100vh - 150px);
    position: relative;
    border-radius: 26px;
    padding: 34px;
    overflow: hidden;
  }

  .home-hero h2 {
    font-size: 28px;
    color: #263238;
    margin-bottom: 8px;
  }

  .home-hero p {
    color: #455A64;
    font-size: 14px;
  }

  .home-brand {
    position: absolute;
    right: 36px;
    bottom: -4px;
    text-align: right;
  }

  .home-logo {
    width: 470px;
    opacity: .78;
    display: block;
  }

  .home-date {
    margin-top: 12px;
    padding-right: 18px;
    color: #263238;
    text-align: right;
  }

  .home-date strong {
    display: block;
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
  }

  .home-date span {
    display: block;
    margin-top: 3px;
    font-size: 22px;
    font-weight: 700;
    color: #455A64;
  }
`;
