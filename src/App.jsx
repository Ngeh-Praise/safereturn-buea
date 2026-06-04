import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ReportCase from "./pages/Reportcase";
import SubmitTip from "./pages/Submittip";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        
        <Routes>
          {/* Main Public Screens */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Internal Dashboard Tracks (Protected Layout Shell) */}
          <Route 
            path="/*" 
            element={
              <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 bg-white p-8 overflow-y-auto">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/report-case" element={<ReportCase />} />
                    <Route path="/submit-tip" element={<SubmitTip />} />
                  </Routes>
                </main>
              </div>
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}