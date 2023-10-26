import HomePage from "../HomePage/HomePage";
import LoginForm from "../LoginForm/LoginForm";
import { Navigate, Routes, Route } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("authenticated")) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function AppRoutes({ loggedIn, setLoggedIn }) {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ProtectedRoute redirectPath="/login">
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/login"
        element={
          loggedIn ? (
            <Navigate to={"/"} replace />
          ) : (
            <LoginForm setLoggedIn={setLoggedIn} />
          )
        }
      />
    </Routes>
  );
}

export default AppRoutes;
