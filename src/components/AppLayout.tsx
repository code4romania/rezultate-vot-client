import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { BallotPage } from "./BallotPage";
import { EmbedWrapper } from "./EmbedWrapper";
import { Header } from "./Header";
import { NewsWidget } from "./NewsWidget";
import { ObservationsWidget } from "./ObservationsWidget";
import { ResultsWidget } from "./ResultsWidget";
import { TurnoutWidget } from "./TurnoutWidget";

export const AppLayout: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/embed">
          <EmbedWrapper>
            <Switch>
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
            </Switch>
          </EmbedWrapper>
        </Route>
        <Route>
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/elections" />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/elections/:ballotId">
              <BallotPage />
            </Route>
            <Route path="/elections">
              <BallotPage />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </>
  );
};
