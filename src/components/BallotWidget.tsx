/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useMemo } from "react";
import {
  ElectionBallotMeta,
  ElectionScopeIncomplete,
  electionScopeIsComplete,
  ElectionScopePicker,
  Label,
  mergeClasses,
  useBallotData,
  useDimensions,
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
import { BallotTitle } from "./BallotTitle";

import classes from "./BallotPage.module.scss";

const BallotContent: React.FC<{ ballotId: number; onOpenSidebar?: () => void }> = ({ ballotId, onOpenSidebar }) => {
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
  const ballotData = useBallotData(electionApi, completeness.complete ? ballotId : null, completeness.complete);

  const ballotList = useBallotList();
  const meta: ElectionBallotMeta | null = useMemo(() => {
    if (ballotData.data) return ballotData.data.meta;
    return ballotList.data?.find((x) => x.ballotId === ballotId) || null;
  }, [ballotData.data, ballotList.data, ballotId]);

  const shownData = completeness.complete ? ballotData.data : null;
  const shownScope = (completeness.complete && ballotData.data?.scope) || scope;

  return (
    <>
      {meta && <BallotTitle meta={meta} onOpenSidebar={onOpenSidebar} />}
      <ElectionScopePicker value={scope} onChange={onScopeChange} apiData={scopePickerData} />
      <BallotTabs
        ballotId={ballotId}
        mode="embed"
        indicators={
          <div className={classes.indicators}>
            {ballotData.data && ballotData.loading && <Ellipsis color="#ffcc00" size={30} />}
            {meta?.live && !ballotData.loading && <Label>Datele se actualizează automat</Label>}
          </div>
        }
      >
        <ErrorMessage error={ballotData.error} />
        {!ballotData.data && ballotData.loading ? (
          <Loader />
        ) : (
          <Switch>
            <Route path={`/embed/${ballotId}/turnout`}>
              <TurnoutTab meta={meta} ballot={shownData} scope={shownScope} onScopeChange={onScopeChange} />
            </Route>
            <Route path={`/embed/${ballotId}/results`}>
              <ResultsTab meta={meta} ballot={shownData} scope={shownScope} onScopeChange={onScopeChange} />
            </Route>
            <Route>
              <Redirect to={`/embed/${ballotId}/turnout`} />
            </Route>
          </Switch>
        )}
      </BallotTabs>
    </>
  );
};

const collapseBreakpoint = 1000;

const SplitView: React.FC<{ ballots: ElectionBallotMeta[] }> = () => {
  const match = useRouteMatch<{ ballotId: string }>();
  const ballotId = toNumber(match.params.ballotId);

  const [measureRef, { width = window.innerWidth }] = useDimensions();
  const collapsed = width < collapseBreakpoint;

  return (
    <div className={mergeClasses(classes.splitView, collapsed && classes.collapsed)}>
      <div style={{ position: "absolute", width: "100vw" }} ref={measureRef} />
      {!collapsed && <style>{"html { background-color: #EFEFEF; } "}</style>}
      <div className={classes.widgetContent}>
        {ballotId != null && <BallotContent ballotId={ballotId} />}
      </div>
    </div>
  );
};

export const BallotWidget: React.FC = () => {
  const ballotList = useBallotList();
  return (
    <>
      {!ballotList.hasData && ballotList.loading && <Loader />}
      <ErrorMessage error={ballotList.error} sideMargins />
      {ballotList.data && <SplitView ballots={ballotList.data} />}
    </>
  );
};
