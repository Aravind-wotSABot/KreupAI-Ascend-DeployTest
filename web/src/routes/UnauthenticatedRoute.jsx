import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const UnauthenticatedRoute = ({ children, redirectTo }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) { // Use optional chaining to safely check user
    return <Navigate to={redirectTo} replace />;
  }
  return <div>{children}</div>;
};

UnauthenticatedRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string.isRequired,
};

export default UnauthenticatedRoute;
