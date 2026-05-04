import Layout from "../components/Layout";

export default function Modelos() {
  return (
    <Layout>
      <h1>Ficha de Modelos</h1>
      <p>Cadastro e manutenção dos modelos de produção</p>

      <section style={card}>
        <h2>Dados principais</h2>

        <div style={grid4}>
          <Campo label="Código" />
          <Campo label="Tempo Peça" />
          <Campo label="Máquina" />
          <Campo label="Coleção" />
        </div>

        <div style={grid4}>
          <Campo label="Peso Total" />
          <Campo label="Programador" />
          <Campo label="NCM" />
          <Campo label="Data" />
        </div>
      </section>

      <section style={card}>
        <h2>Fios e Cores</h2>
        {Array.from({ length: 12 }, (_, i) => (
          <div style={row} key={i}>
            <strong>Fio {i + 1}</strong>
            <input placeholder="Peso" />
            <input placeholder="Cor 1" />
            <input placeholder="Cor 2" />
            <input placeholder="Cor 3" />
          </div>
        ))}
      </section>
    </Layout>
  );
}

function Campo({ label }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <strong>{label}</strong>
      <input style={input} />
    </label>
  );
}

const card = {
  background: "#fff",
  borderRadius: 18,
  padding: 22,
  marginTop: 22,
  boxShadow: "0 10px 28px rgba(0,0,0,.08)"
};

const grid4 = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 16,
  marginBottom: 16
};

const input = {
  height: 38,
  borderRadius: 10,
  border: "1px solid #D6DEE3",
  padding: "0 10px"
};

const row = {
  display: "grid",
  gridTemplateColumns: "90px repeat(4, 1fr)",
  gap: 10,
  marginBottom: 10
};
