import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { Navigate } from "react-router-dom";

function ProtectedRouteLoggedInUser({ children }) {
  const { loggedInUser } = useContext(DataContext);

  if (!loggedInUser) {
    return <Navigate to="/profile" />;
  }

  return children;
}
export default ProtectedRouteLoggedInUser;
