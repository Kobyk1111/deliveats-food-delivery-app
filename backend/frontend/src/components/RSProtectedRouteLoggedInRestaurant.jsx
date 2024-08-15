import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { Navigate } from "react-router-dom";

function RSProtectedRouteLoggedInRestaurant({ children }) {
  const { loggedInRestaurant } = useContext(DataContext);

  if (!loggedInRestaurant) {
    return <Navigate to="/rs-home" />;
  }

  return children;
}

export default RSProtectedRouteLoggedInRestaurant;
