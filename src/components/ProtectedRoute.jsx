// ProtectedRoute.jsx
import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return !isAuthenticated ? <Outlet {...rest} /> : <Navigate to="/task-4" />;
};

export default ProtectedRoute;
