
export default function Login() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img src="/logo-tricofio.png" style={styles.logo} />

        <h1>Controle Produção</h1>
        <p>Acesse o sistema</p>

        <label>Usuário</label>
        <input placeholder="Digite seu usuário" />

        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" />

        <button onClick={() => window.location.href = "/"}>
          Entrar
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#AEBCC3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif"
  },
  card: {
    width: 390,
    background: "#fff",
    borderRadius: 22,
    padding: 32,
    boxShadow: "0 20px 45px rgba(0,0,0,.18)"
  },
  logo: {
    width: "75%",
    display: "block",
    margin: "0 auto 24px"
  }
};
