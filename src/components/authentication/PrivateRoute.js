import { Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Login from "./Login";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        );
      }}
    ></Route>
  );
}

// const PrivateRoute = () => {
//   const [isAuth, setIsAuth] = useState(false);

//   const { currentUser } = useAuth();

//   if (currentUser) {
//     setIsAuth(true);
//   }

//   return isAuth ? <Outlet /> : <Login />;
// };

// export default PrivateRoute;
