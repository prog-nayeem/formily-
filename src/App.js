import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import ChangePassword from "./page/ChangePassword";
import Dashboard from "./page/Dashboard";
import ForgotPassword from "./page/ForgotPassword";
import Home from "./page/Home";
import Login from "./page/Login";
import ResetPassword from "./page/ResetPassword";
import Shopping from "./page/Shopping";
import SignUp from "./page/SignUp";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/shopping" element={<Shopping />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
