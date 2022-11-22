import React from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "components/SharedLayout";
import CreateMonitor from "pages/create-monitor";
import Monitors from "pages/monitors";
import Login from "./pages/login";
import Register from "./pages/register";
import MonitorDetails from "./pages/monitor-details";

const App = () => {
  return (
    <Routes>
      <Route path="/team" element={<SharedLayout />}>
        <Route index element={<Monitors />} />
        <Route path="/team/create-monitor" element={<CreateMonitor />} />
        <Route
          path="/team/:teamID/monitor/:monitorID"
          element={<MonitorDetails />}
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
