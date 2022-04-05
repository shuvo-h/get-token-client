import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TheLayout from "./views/pages/theLayOut/TheLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TheLayout></TheLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
