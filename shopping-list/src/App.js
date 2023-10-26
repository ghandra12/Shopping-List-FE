import "./App.css";
import { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Pages/LoginForm/LoginForm";
import Navigation from "./components/Pages/Navigation/Navigation";
import HomePage from "./components/Pages/HomePage/HomePage";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("authenticated")) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      {loggedIn && <Navigation onLogout={() => setLoggedIn(false)} />}
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
    </>
  );
}

export default App;
