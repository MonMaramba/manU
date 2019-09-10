import React from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/signin";
import Home from "./Components/home";
import Dashboard from "./Components/admin/Dashboard";
import PrivateRoute from "./Components/authRoutes/privateRoutes";
import PublicRoute from "./Components/authRoutes/publicRoutes";
import TheTeam from "./Components/theTeam/";
import AdminMatches from "./Components/admin/matches";
import AddEditMatch from "./Components/admin/matches/addEditMatch";
import AdminPlayers from "./Components/admin/players";
import AddEditPlayers from "./Components/admin/players/addEditPlayers";
function Routes(props) {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_players/add_players/:id"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players/add_players"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />

        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />

        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match"
          exact
          component={AddEditMatch}
        />

        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
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
        <PublicRoute
          {...props}
          path="/the_team"
          restricted={false}
          exact
          component={TheTeam}
        />
      </Switch>
    </Layout>
  );
}

export default Routes;
