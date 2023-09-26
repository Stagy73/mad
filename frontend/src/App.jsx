import "./App.css";
import React from "react";
import "./components/NavBar.css";

import Navbar from "./components/NavBar";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <div>
      <Navbar />;
      <CategoryList />
    </div>
  );
}

export default App;
