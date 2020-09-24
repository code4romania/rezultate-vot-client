import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BallotPage } from "./BallotPage";
import { BallotWidget } from "./BallotWidget";
import { Header } from "./Header";

export const AppLayout: React.FC = () => {
  return (
    <>
      <Route path="/web">
        <Header />
        <Route path="/web/elections/:ballotId">
          <BallotPage />
        </Route>
        <Route path="/web/elections">
          <BallotPage />
        </Route>
      </Route>
      <Route path="/embed/:ballotId">
        <BallotWidget />
      </Route>
      <Route exact path="/">
        <Redirect to="/web/elections" />
      </Route>
    </>
  );
};
