import React from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/signin";
import Home from "./Components/home";
import Dashboard from "./Components/admin/Dashboard";
import PrivateRoute from "./Components/authRoutes/privateRoutes";

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

        <Route exact component={SignIn} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
}

export default Routes;
