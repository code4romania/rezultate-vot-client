import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BallotPage } from "./BallotPage";

export const AppLayout: React.FC = () => {
  return (
    <Switch>
      <Route path="/elections">
        <BallotPage />
      </Route>
      <Route>
        <Redirect to="/elections" />
      </Route>
    </Switch>
  );
};
