import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import KozeletsPage from "./Components/KozeletsPage";
import "./i18n";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KozeletsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
