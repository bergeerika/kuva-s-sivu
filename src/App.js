import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Weather from "./Weather";

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Weather" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};

