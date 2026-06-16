import { Navigate } from "react-router-dom";

function RoleRoute({ children, role }) {
  const userRole = localStorage.getItem("role");

  return userRole === role
    ? children
    : <Navigate to="/login" />;
}

export default RoleRoute;