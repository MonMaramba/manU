import React from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/signin";
import Home from "./Components/home";
import Dashboard from "./Components/admin/Dashboard";
import PrivateRoute from "./Components/authRoutes/privateRoutes";
import PublicRoute from "./Components/authRoutes/publicRoutes";
import NotFound from "./Components/ui/not_found";
import TheTeam from "./Components/theTeam/";
import AdminMatches from "./Components/admin/matches";
import AddEditMatch from "./Components/admin/matches/addEditMatch";
import AdminPlayers from "./Components/admin/players";
import AddEditPlayers from "./Components/admin/players/addEditPlayers";
import TheMatches from "./Components/theMatches";
function Routes(props) {
  return (
    <Layout>
      {/* // header and footer gets passed with Layout */}
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

        <PrivateRoute //prop taken from index.js using onAuthChanged()
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
          restricted={true} //disallows access if logged in
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          path="/"
          restricted={false} //free access whether logged in or not
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
        <PublicRoute
          {...props}
          path="/the_matches"
          restricted={false}
          exact
          component={TheMatches}
        />
        <PublicRoute {...props} restricted={false} exact component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default Routes;
