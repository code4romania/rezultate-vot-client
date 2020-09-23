import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BallotPage } from "./BallotPage";
import { Header } from "./Header";

export const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/elections/:ballotId">
          <BallotPage />
        </Route>
        <Route path="/elections">
          <BallotPage />
        </Route>
        <Route>
          <Redirect to="/elections" />
        </Route>
      </Switch>
    </>
  );
};
