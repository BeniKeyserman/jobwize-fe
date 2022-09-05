import { Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";

const LoginRoute = ({ isLoggedIn, role, children }) => {
  if (!isLoggedIn) {
    return children;
  } else if (isLoggedIn & role === 'Employee') {
    return <Navigate to='/employee' replace />;
  } else if (isLoggedIn & role === 'Employer') {
    return <Navigate to='/employer' replace />;
  };
};

const ProtectedRoute = ({ isLoggedIn, role, children }) => {
  const cookies = new Cookies();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else if (isLoggedIn & role !== cookies.get('userRole').toLowerCase()) {
    return <Navigate to={ `/${cookies.get('userRole').toLowerCase()}` } replace />;
  } else {
    return children;
  };
};

export { 
  LoginRoute,
  ProtectedRoute,
};
