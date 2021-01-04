import React from "react";
import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";
export const AppRouter = () => {
  return (
    <Router>
      <>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/about" component={AboutScreen}></Route>
          <Route exact path="/login" component={LoginScreen}></Route>
          <Redirect to="/"/>
        </Switch>
      </>
    </Router>
  );
};
