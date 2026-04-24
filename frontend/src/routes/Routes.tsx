import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import AddLead from "../pages/AddLeads";
import DashboardLayout from "../layout/DashboardLayout";
import LeadLists from "../pages/LeadLists";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route index element={<LandingPage />} />
        {/* auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* dashboard route */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<LeadLists />} />
          <Route path="/add-lead" element={<AddLead />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
