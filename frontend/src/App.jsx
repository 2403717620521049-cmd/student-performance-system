import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [page, setPage] = useState("register");

  return (
    <div className="container">
      {page === "register" && <Register />}

      {page === "login" && <Login />}

      {page === "dashboard" && <Dashboard />}

      <br />

      <button onClick={() => setPage("register")}>
        Register
      </button>

      <button onClick={() => setPage("login")}>
        Login
      </button>

      <button onClick={() => setPage("dashboard")}>
        Dashboard
      </button>
    </div>
  );
}

export default App;


