import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectUser } from "../features/userSlice";

function PrivateRoute({ children, ...rest }) {
  const user = useSelector(selectUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
