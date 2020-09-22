import React, { useCallback, useMemo } from "react";
import {
  ElectionBallotMeta,
  ElectionScopeIncomplete,
  electionScopeIsComplete,
  ElectionScopePicker,
  ElectionTimeline,
  Label,
  useBallotData,
  useElectionScopePickerApi,
} from "@code4ro/reusable-components";
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { Ellipsis } from "react-spinners-css";

import { useBallotList } from "./BallotListProvider";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import { prependQuestionMark, scopeFromSearch, searchFromScope, toNumber } from "../functions/urlState";
import { useElectionApi } from "./ElectionAPIContext";
import { BallotTabs } from "./BallotTabs";
import { TurnoutTab } from "./TurnoutTab";
import { ResultsTab } from "./ResultsTab";
import { Separator } from "./Separator";
import classes from "./BallotPage.module.scss";

const BallotContent: React.FC<{ ballotId: number }> = ({ ballotId }) => {
  const location = useLocation();
  const history = useHistory();

  const [scope, completeness] = useMemo(() => {
    const s = scopeFromSearch(location.search);
    return [s, electionScopeIsComplete(s)];
  }, [location.search]);

  const onScopeChange = useCallback(
    (newScope: ElectionScopeIncomplete) => {
      history.push({ ...location, search: prependQuestionMark(searchFromScope(newScope)) });
    },
    [location, history],
  );

  const electionApi = useElectionApi();
  const scopePickerData = useElectionScopePickerApi(electionApi, scope);
  const ballotData = useBallotData(electionApi, ballotId, completeness.complete);

  const ballotList = useBallotList();
  const meta: ElectionBallotMeta | null = useMemo(() => {
    if (ballotData.data) return ballotData.data.meta;
    return ballotList.data?.find((x) => x.ballotId === ballotId) || null;
  }, [ballotData.data, ballotList.data, ballotId]);

  const shownData = completeness.complete ? ballotData.data : null;
  const shownScope = (completeness.complete && ballotData.data?.scope) || scope;

  return (
    <>
      <ElectionScopePicker value={scope} onChange={onScopeChange} apiData={scopePickerData} />
      <Separator className={classes.scopeSeparator} />
      <BallotTabs
        ballotId={ballotId}
        indicators={
          <div className={classes.indicators}>
            {ballotData.data && ballotData.loading && <Ellipsis color="#ffcc00" size={30} />}
            {true && !ballotData.loading && <Label>Datele se actualizează automat</Label>}
          </div>
        }
      >
        <ErrorMessage error={ballotData.error} sideMargins />
        {!ballotData.data && ballotData.loading ? (
          <Loader />
        ) : (
          <Switch>
            <Route path={`/elections/${ballotId}/turnout`}>
              <TurnoutTab meta={meta} ballot={shownData} scope={shownScope} />
            </Route>
            <Route path={`/elections/${ballotId}/results`}>
              <ResultsTab meta={meta} ballot={shownData} scope={shownScope} />
            </Route>
            <Route>
              <Redirect to={`/elections/${ballotId}/turnout`} />
            </Route>
          </Switch>
        )}
      </BallotTabs>
    </>
  );
};

const SplitView: React.FC<{ ballots: ElectionBallotMeta[] }> = ({ ballots }) => {
  const match = useRouteMatch<{ ballotId: string }>();
  const ballotId = toNumber(match.params.ballotId);

  const location = useLocation();
  const history = useHistory();
  const onSelectBallot = useCallback(
    (meta: ElectionBallotMeta) => {
      const rest = location.pathname.match(/^\/elections\/[0-9]+(.*)$/);
      history.push({ ...location, pathname: `/elections/${meta.ballotId}${(rest && rest[1]) || ""}` });
    },
    [location, history],
  );

  return (
    <div className={classes.splitView}>
      <div className={classes.timelineSidebar}>
        <ElectionTimeline items={ballots} selectedBallotId={ballotId} onSelectBallot={onSelectBallot} />
      </div>
      <div className={classes.content}>
        {ballotId == null && ballots.length >= 1 && <Redirect to={`/elections/${ballots[0].ballotId}`} />}
        {ballotId != null && <BallotContent ballotId={ballotId} />}
      </div>
    </div>
  );
};

export const BallotPage: React.FC = () => {
  const ballotList = useBallotList();
  return (
    <>
      {!ballotList.hasData && ballotList.loading && <Loader />}
      <ErrorMessage error={ballotList.error} sideMargins />
      {ballotList.data && <SplitView ballots={ballotList.data} />}
    </>
  );
};
