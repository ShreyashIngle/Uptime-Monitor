import SharedLayout from "components/SharedLayout";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
const App = () => {
  return (
    <Routes>
      <Route path="/team" element={<SharedLayout />}>
          
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
