import { Navigate } from "react-router-dom";

const LoginRoute = ({ isLoggedIn, role, children }) => {
  if (!isLoggedIn) {
    return children;
  } else if (isLoggedIn & role === 'Employee') {
    return <Navigate to='/employee' replace />;
  } else if (isLoggedIn & role === 'Employer') {
    return <Navigate to='/employer' replace />;
  }
}

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  };

  return children;
}

export { 
  LoginRoute,
  ProtectedRoute,
};
