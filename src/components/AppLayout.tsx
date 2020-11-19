import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { EmbedWrapper } from "./EmbedWrapper";
import { Header } from "./Header";
import { Loader } from "./Loader";

const AboutPageLazy = lazy(() => import("./AboutPage").then(({ AboutPage }) => ({ default: AboutPage })));
const CookiePolicyPageLazy = lazy(() =>
  import("./CookiePolicyPage").then(({ CookiePolicyPage }) => ({ default: CookiePolicyPage })),
);
const BallotPageLazy = lazy(() => import("./BallotPage").then(({ BallotPage }) => ({ default: BallotPage })));
const NewsWidgetLazy = lazy(() => import("./NewsWidget").then(({ NewsWidget }) => ({ default: NewsWidget })));
const ResultsWidgetLazy = lazy(() =>
  import("./ResultsWidget").then(({ ResultsWidget }) => ({ default: ResultsWidget })),
);
const TurnoutWidgetLazy = lazy(() =>
  import("./TurnoutWidget").then(({ TurnoutWidget }) => ({ default: TurnoutWidget })),
);
const ObservationsWidgetLazy = lazy(() =>
  import("./ObservationsWidget").then(({ ObservationsWidget }) => ({ default: ObservationsWidget })),
);
const NewsCardPageLazy = lazy(() => import("./NewsCardPage").then(({ NewsCardPage }) => ({ default: NewsCardPage })));
const NewsCardWidgetLazy = lazy(() =>
  import("./NewsCardWidget").then(({ NewsCardWidget }) => ({ default: NewsCardWidget })),
);

export const AppLayout: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/embed">
          <EmbedWrapper>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route path="/embed/:ballotId/turnout">
                  <TurnoutWidgetLazy />
                </Route>
                <Route path="/embed/:ballotId/observation">
                  <ObservationsWidgetLazy />
                </Route>
                <Route path="/embed/:ballotId/results">
                  <ResultsWidgetLazy />
                </Route>
                <Route path="/embed/:ballotId/news/:newsId">
                  <NewsCardWidgetLazy />
                </Route>
                <Route path="/embed/:ballotId/news">
                  <NewsWidgetLazy />
                </Route>
              </Switch>
            </Suspense>
          </EmbedWrapper>
        </Route>
        <Route>
          <Header />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/elections" />
              </Route>
              <Route path="/feed/:ballotId/news/:newsId">
                <NewsCardPageLazy />
              </Route>
              <Route path="/about" exact>
                <AboutPageLazy />
              </Route>
              <Route path="/cookiepolicy" exact>
                <CookiePolicyPageLazy />
              </Route>
              <Route path="/elections/:ballotId">
                <BallotPageLazy />
              </Route>
              <Route path="/elections">
                <BallotPageLazy />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Suspense>
        </Route>
      </Switch>
    </>
  );
};
