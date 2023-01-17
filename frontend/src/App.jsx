import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SharedLayout from "@/components/SharedLayout";
import CreateMonitor from "@/pages/create-monitor";
import Monitors from "@/pages/monitors";
import Login from "@/pages/login";
import Register from "@/pages/register";
import MonitorDetails from "@/pages/monitor-details";
import EmailConfirmation from "@/pages/email-confirmation";
import Incidents from "@/pages/incidents";
import Invitations from "@/pages/invitations";
import Members from "./pages/members";
import InviteMembers from "./pages/invite-members";
import Integrations from "./pages/integrations";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Monitors />} />
          <Route path="/team/create-monitor" element={<CreateMonitor />} />
          <Route path="/team/incidents" element={<Incidents />} />
          <Route path="/team/members" element={<Members />} />
          <Route path="/team/members/add" element={<InviteMembers />} />
          <Route path="/team/invitations" element={<Invitations />} />
          <Route path="/team/integrations" element={<Integrations />} />
          <Route
            path="/team/:teamID/monitor/:monitorID"
            element={<MonitorDetails />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email-verification" element={<EmailConfirmation />} />
      </Routes>
      <ToastContainer style={{ fontSize: "15px" }} />
    </>
  );
};

export default App;
