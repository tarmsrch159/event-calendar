import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AuthService from '../context/Auth_2';
function ProtectRoute({ element: Element, ...rest }) {
  // const { token } = useAuth();

  return (
    AuthService.isAuthenticated()
      ?
      <>
        < Outlet />
      </>

      : <Navigate to="/login_admin" />

  );
}

export default ProtectRoute