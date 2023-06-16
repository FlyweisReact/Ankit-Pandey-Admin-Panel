/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Screen/Login";
import Dashboard from "./E-CommerceAdmin/pages/Dashboard";
import EAdminOrders from "./E-CommerceAdmin/pages/EAdminOrders";
import EAdminCustomer from "./E-CommerceAdmin/pages/EAdminCustomer";
import EAdmin from "./E-CommerceAdmin/pages/EAdmin";
function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Customer" element={<EAdminCustomer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Admin" element={<EAdmin />} />
        <Route path="/Orders" element={<EAdminOrders />} />

  
      </Routes>
    </>
  );
}

export default App;
