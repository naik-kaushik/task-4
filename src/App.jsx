import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/task-4"
            element={<Login onLogin={setAuthenticated} />}
          />
          <Route
            path="/task-4/dashboard"
            element={<Dashboard onLogout={setAuthenticated} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
