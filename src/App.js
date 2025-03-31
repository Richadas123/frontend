import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Ensure correct path
import Portfolio from "./components/Portfolio"; // Example main content

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar /> {/* Sidebar should be here */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Portfolio />} /></Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
