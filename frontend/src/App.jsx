import SharedLayout from "components/SharedLayout";
import CreateMonitor from "pages/create-monitor";
import Monitors from "pages/monitors";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/register";
const App = () => {
  return (
    <Routes>
      {/* <Route path="/team" element={<SharedLayout />}>
      </Route> */}
      <Route path="/team" element={<SharedLayout />}>
        <Route index element={<Monitors />} />
        <Route path="/team/create-monitor" element={<CreateMonitor />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
