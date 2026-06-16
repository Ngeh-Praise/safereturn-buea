import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReportCase from "./pages/Reportcase";
import SubmitTip from "./pages/Submittip";
import About from "./pages/About";
import SafetyTips from "./pages/SafetyTips";
import ActiveCases from "./pages/ActiveCases"
import CommunityDashboard from "./dashboard/CommunityDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";

// Create a small helper component to handle the Navbar logic
function Layout({ children }) {
  const location = useLocation();
  // Define which paths should NOT have the Navbar
  const hideNavbar = location.pathname === "/register" || location.pathname === "/admin-dashboard";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
          <Routes>
            {/* Main Public Screens */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/safety-tips" element={<SafetyTips />} />

            {/* 1. Admin Dashboard Route (NO Sidebar) */}
            <Route path="/admin-dashboard" element={
               <div className="flex-1 bg-white p-8 overflow-y-auto">
                 <AdminDashboard />
               </div>
            } />

            {/* 2. Community Dashboard Routes (With General Sidebar) */}
            <Route 
              path="/*" 
              element={
                <div className="flex flex-1">
                  <Sidebar />
                  <main className="flex-1 bg-white p-8 overflow-y-auto">
                    <Routes>
                      <Route path="/activecases" element={<ActiveCases />} />
                      <Route path="/report-case" element={<ReportCase />} />
                      <Route path="/submit-tip" element={<SubmitTip />} />
                      <Route path="/community-dashboard" element={<CommunityDashboard />} /> 
                    </Routes>
                  </main>
                </div>
              } 
            />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}