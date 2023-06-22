/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Screen/Login";
import Dashboard from "./Screen/Dashboard";
import EAdminCustomer from "./Screen/EAdminCustomer";
import EAdmin from "./Screen/EAdmin";
import UpdateProfile from "./Screen/UpdateProfile";
import Orders from "./Screen/Orders";


function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Customer" element={<EAdminCustomer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Admin" element={<EAdmin />} />
        <Route path="/Order" element={<Orders />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
      </Routes>
    </>
  );
}

export default App;
