/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useMemo, useState } from "react";
import {
  ElectionBallotMeta,
  ElectionScopeIncomplete,
  electionScopeIsComplete,
  ElectionScopePicker,
  ElectionTimeline,
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
import { Separator } from "./Separator";
import { NewsSection } from "./NewsSection";
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
      <Separator className={classes.scopeSeparator} />
      <BallotTabs
        ballotId={ballotId}
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
      {shownData?.electionNews && shownData.electionNews.length > 0 && <NewsSection feed={shownData.electionNews} />}
    </>
  );
};

const collapseBreakpoint = 1000;

const SplitView: React.FC<{ ballots: ElectionBallotMeta[] }> = ({ ballots }) => {
  const match = useRouteMatch<{ ballotId: string }>();
  const ballotId = toNumber(match.params.ballotId);

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const onOpenSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const onCloseSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const location = useLocation();
  const history = useHistory();
  const onSelectBallot = useCallback(
    (meta: ElectionBallotMeta) => {
      const rest = location.pathname.match(/^\/elections\/[0-9]+(.*)$/);
      history.push({ ...location, pathname: `/elections/${meta.ballotId}${(rest && rest[1]) || ""}` });
      setSidebarOpen(false);
    },
    [location, history],
  );

  const [measureRef, { width = window.innerWidth }] = useDimensions();
  const collapsed = width < collapseBreakpoint;

  return (
    <div className={mergeClasses(classes.splitView, collapsed && classes.collapsed)}>
      <div style={{ position: "absolute", width: "100vw" }} ref={measureRef} />
      <div className={mergeClasses(classes.timelineSidebar, collapsed && sidebarOpen && classes.timelineSidebarOpen)}>
        <ElectionTimeline items={ballots} selectedBallotId={ballotId} onSelectBallot={onSelectBallot} />
      </div>
      <div className={classes.content}>
        {ballotId == null && ballots.length >= 1 && <Redirect to={`/elections/${ballots[0].ballotId}`} />}
        {ballotId != null && (
          <BallotContent ballotId={ballotId} onOpenSidebar={collapsed ? onOpenSidebar : undefined} />
        )}
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      {collapsed && sidebarOpen && <div className={classes.tapToClose} onClick={onCloseSidebar} />}
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
