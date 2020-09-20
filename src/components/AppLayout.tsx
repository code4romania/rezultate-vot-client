import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { BallotPage } from "./BallotPage";
import { Header } from "./Header";

export const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/elections">
          <BallotPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route>
          <Redirect to="/elections" />
        </Route>
      </Switch>
    </>
  );
};
