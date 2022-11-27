import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SharedLayout from "components/SharedLayout";
import CreateMonitor from "pages/create-monitor";
import Monitors from "pages/monitors";
import Login from "./pages/login";
import Register from "./pages/register";
import MonitorDetails from "./pages/monitor-details";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
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
      <ToastContainer style={{ fontSize: "16px" }} />
    </>
  );
};

export default App;
