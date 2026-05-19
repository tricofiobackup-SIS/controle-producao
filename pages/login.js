export default function Login() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        
        <img src="/logo-tricofio.png" style={styles.logo} />

        <h1 style={styles.title}>Controle Produção</h1>
        <p style={styles.subtitle}>Acesse o sistema</p>

        <label style={styles.label}>Usuário</label>
        <input style={styles.input} placeholder="Digite seu usuário" />

        <label style={styles.label}>Senha</label>
        <input type="password" style={styles.input} placeholder="Digite sua senha" />

        <button
          style={styles.button}
          onClick={() => window.location.href = "/"}
        >
          Entrar
        </button>

        <small style={styles.footer}>
          Sistema Tricofio • Controle interno
        </small>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #607D8B, #2F3E46)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif"
  },

  card: {
    width: 400,
    background: "#fff",
    borderRadius: 20,
    padding: 35,
    boxShadow: "0 25px 60px rgba(0,0,0,.25)",
    display: "flex",
    flexDirection: "column"
  },

  logo: {
    width: "65%",
    margin: "0 auto 25px"
  },

  title: {
    textAlign: "center",
    margin: 0,
    fontSize: 26,
    color: "#2F3E46"
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 25,
    color: "#607D8B"
  },

  label: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10
  },

  input: {
    height: 42,
    borderRadius: 10,
    border: "1px solid #D6DEE3",
    padding: "0 12px",
    outline: "none",
    transition: "0.2s"
  },

  button: {
    marginTop: 20,
    height: 45,
    borderRadius: 12,
    border: 0,
    background: "#607D8B",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    cursor: "pointer",
    transition: "0.2s"
  },

  footer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 12,
    color: "#8FA3AD"
  }
};
