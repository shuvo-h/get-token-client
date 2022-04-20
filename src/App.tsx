import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import OwnerDashboardLayout from "./views/pages/ownerDashboard/OwnerDashboardLayout";
import TheLayout from "./views/pages/theLayOut/TheLayout";

function App() {
  return (
    <div>
       <AuthProvider>
        <BrowserRouter>
          <TheLayout></TheLayout>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
