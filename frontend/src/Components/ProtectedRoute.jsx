// Components/ProtectedRoute.jsx
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated by looking for the token
  const isAuthenticated = !!localStorage.getItem("token");

  // If there is no token, redirect to the login page and replace the history state
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children (the protected page)
  return children;
};

export default ProtectedRoute;