import React from "react";
import { Redirect, Route } from "react-router-dom";
import { BallotPage } from "./BallotPage";
import { Header } from "./Header";
import { NewsWidget } from "./NewsWidget";
import { ObservationsWidget } from "./ObservationsWidget";
import { ResultsWidget } from "./ResultsWidget";
import { TurnoutWidget } from "./TurnoutWidget";

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
      <Route path="/embed">
        <Route path="/embed/:ballotId/turnout">
          <TurnoutWidget />
        </Route>
        <Route path="/embed/:ballotId/observation">
          <ObservationsWidget />
        </Route>
        <Route path="/embed/:ballotId/results">
          <ResultsWidget />
        </Route>
        <Route path="/embed/:ballotId/news">
          <NewsWidget />
        </Route>
      </Route>
      <Route exact path="/">
        <Redirect to="/web/elections" />
      </Route>
    </>
  );
};
