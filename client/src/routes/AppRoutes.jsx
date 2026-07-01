import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Fields from "../pages/fields/Fields";
import Crops from "../pages/crops/Crops";
import Weather from "../pages/weather/Weather";
import Soil from "../pages/soil/Soil";
import Assistant from "../pages/assistant/Assistant";
import Reports from "../pages/reports/Reports";
import Notifications from "../pages/notifications/Notifications";
import Settings from "../pages/settings/Settings";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/fields" element={<Fields />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/soil" element={<Soil />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;