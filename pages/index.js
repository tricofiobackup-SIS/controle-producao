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

  function horaCompleta(data) {
    return data.toLocaleTimeString("pt-BR");
  }

  return (
    <Layout titulo="Controle Produção" subtitulo="Sistema interno Tricofio">
      <style>{css}</style>

      <div className="home-hero">
        <div>
          <h2>Bem-vindo ao sistema</h2>
          <p>Gestão de produção, modelos, fios, ordens de serviço e consultas.</p>
        </div>

        <div className="home-date">
          <strong>{dataCompleta(agora)}</strong>
          <span>{horaCompleta(agora)}</span>
        </div>

        <img src="/logo-tricofio.png" className="home-logo" alt="Tricofio" />
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

  .home-logo {
    position: absolute;
    right: 34px;
    bottom: -8px;
    width: 360px;
    opacity: .72;
  }

  .home-date {
    position: absolute;
    right: 42px;
    bottom: 118px;
    text-align: right;
    color: #263238;
  }

  .home-date strong {
    display: block;
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
  }

  .home-date span {
    display: block;
    margin-top: 6px;
    font-size: 26px;
    font-weight: 700;
    color: #455A64;
  }
`;
