import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login onLogin={setAuthenticated} />} />
          <Route element={<ProtectedRoute isAuthenticated={authenticated} props={setAuthenticated} />} >
            <Route element={<Dashboard onLogout={setAuthenticated}/>} path="/dashboard" exact />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
