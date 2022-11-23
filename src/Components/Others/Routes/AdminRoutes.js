import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../UseHooks/useAdmin";
import { AuthContext } from "../UserContext/UserContext";

const AdminRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)

  if (isAdminLoading) {
    return <div>Loading...</div>;
  }

  if (user && isAdmin.isAdmin) {
    return (
        children
        );
    }
    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;
