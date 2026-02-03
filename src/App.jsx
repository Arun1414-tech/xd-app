import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f2f2f2",
        }}
      >
        <div
          style={{
            width: 375,
            height: 812,
            background: "#ffffff",
            borderRadius: 24,
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            overflow: "hidden",
          }}
        >
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
