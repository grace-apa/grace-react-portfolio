import React from "react";
import "./App.css";
import AppRoutes from "./Routes";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
