import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RouteLayout from "./pages/RouteLayout";
import PaymentDashBoard from "./pages/PaymentDashBoard";
import TopBar from "./components/ui/TopBar";
import LeftBar from "./components/ui/LeftBar";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<RouteLayout />}>
          <Route index element={<PaymentDashBoard />} />

          {/* can list route all the other here present in sideBar */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
