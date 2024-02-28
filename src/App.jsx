import React from "react";
import "./App.css";
import AppRoutes from "./Routes"
import Header from "./components/Header";
import './index.css' 


function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;



// To do list

// store your project details data in a JSON file and import it into your project
// must be resuable component that ingests JSON data as props and renders a single instance for each project