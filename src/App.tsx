import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import OwnerDashboardLayout from "./views/pages/ownerDashboard/OwnerDashboardLayout";
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
