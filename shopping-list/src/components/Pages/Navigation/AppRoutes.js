import HomePage from "../HomePage/HomePage";
import LoginForm from "../LoginForm/LoginForm";
import { Navigate, Routes, Route } from "react-router-dom";
import AddCategoryForm from "../AddCategoryPage/AddCategoryForm";
import Products from "../Products/Products";
import LastList from "../LastList/LastList";
import AddNewClient from "../../AdminOnly/AddNewClient";
import AddAgain from "../LastList/AddAgain";
import AddProduct from "../AddProduct/AddProduct";
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
      <Route
        exact
        path="/addnewcategory"
        element={
          <ProtectedRoute>
            <AddCategoryForm />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/lastlist"
        element={
          <ProtectedRoute>
            <LastList />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/addnewclientform"
        element={
          <ProtectedRoute>
            <AddNewClient />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/addagain"
        element={
          <ProtectedRoute>
            <AddAgain />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/addproduct"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/addproduct"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}

export default AppRoutes;
