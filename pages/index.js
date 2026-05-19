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
    <Layout>
      <style>{css}</style>

      <div className="home-hero">

        <div className="welcome-area">
          <h2>Bem-vindo ao sistema</h2>

          <p>
            Gestão de produção, modelos, fios,
            ordens de serviço e consultas.
          </p>
        </div>

        <div className="home-brand">

          <img
            src="/logo-tricofio.svg"
            className="home-logo"
            alt="Tricofio"
          />

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
    min-height: calc(100vh - 140px);
    position: relative;
    border-radius: 26px;
    padding: 30px;
    overflow: hidden;
  }

  .welcome-area {
    position: relative;
    z-index: 2;
  }

  .home-hero h2 {
    font-size: 28px;
    color: #263238;
    margin-bottom: 8px;
    font-weight: 700;
  }

  .home-hero p {
    color: #455A64;
    font-size: 14px;
    max-width: 520px;
    line-height: 1.6;
  }

  .home-brand {
    position: absolute;
    right: 36px;
    bottom: 20px;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .home-logo {
  width: 680px;
  max-width: 90vw;
  opacity: .82;
  display: block;
  user-select: none;
  pointer-events: none;
}

  .home-date {
    margin-top: 12px;
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
    margin-top: 2px;
    font-size: 22px;
    font-weight: 700;
    color: #455A64;
  }

  @media (max-width: 900px) {

    .home-hero {
      min-height: auto;
      padding: 18px;
    }

    .home-hero h2 {
      font-size: 22px;
    }

    .home-hero p {
      font-size: 13px;
      max-width: 100%;
    }

    .home-brand {
      position: relative;
      right: auto;
      bottom: auto;
      margin-top: 40px;
      align-items: center;
      text-align: center;
    }

    .home-logo {
      width: 100%;
      max-width: 320px;
    }

    .home-date {
      text-align: center;
      margin-top: 8px;
    }

    .home-date strong {
      font-size: 12px;
    }

    .home-date span {
      font-size: 18px;
    }
  }
`;
