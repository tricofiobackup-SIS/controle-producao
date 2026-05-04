import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div style={styles.page}>
      <Sidebar />
      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    margin: 0,
    background: "#AEBCC3",
    fontFamily: "Arial, sans-serif"
  },
  main: {
    flex: 1,
    minHeight: "100vh",
    background: "#AEBCC3",
    padding: 32,
    boxSizing: "border-box",
    overflow: "auto"
  }
};
