
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles = {
  main: {
    flex: 1,
    padding: 30,
    background: "#AEBCC3",
    minHeight: "100vh"
  }
};
