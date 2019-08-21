import React from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/signin";
import Home from "./Components/home";
import Dashboard from "./Components/admin/Dashboard";
import PrivateRoute from "./Components/authRoutes/privateRoutes";
import PublicRoute from "./Components/authRoutes/publicRoutes";

function Routes(props) {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />

        <PublicRoute
          {...props}
          path="/sign_in"
          restricted={true}
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          path="/"
          restricted={false}
          exact
          component={Home}
        />
      </Switch>
    </Layout>
  );
}

export default Routes;
