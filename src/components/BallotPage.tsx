/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useState } from "react";
import {
  // DivLabel,
  ElectionBallotMeta,
  // electionScopeCoerceToCompatible,
  ElectionScopeIncomplete,
  electionScopeIsComplete,
  // ElectionScopePicker,
  ElectionTimeline,
  electionTypeCompatibleScopes,
  Heading1,
  Heading3,
  Label,
  mergeClasses,
  useBallotData,
  useDimensions,
  useElectionScopePickerApi,
} from "@code4ro/reusable-components";
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { Ellipsis } from "react-spinners-css";

import screenLarge from "../assets/screenLarge.png";

import { useBallotList } from "./BallotListProvider";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import { prependQuestionMark, scopeFromSearch, searchFromScope, toNumber } from "../functions/urlState";
import { useElectionApi } from "./ElectionAPIContext";
import { BallotTabs } from "./BallotTabs";
import { TurnoutTab } from "./TurnoutTab";
import { ResultsTab } from "./ResultsTab";
import { CandidatesTab } from "./CandidatesTab";
import { NewsSection } from "./NewsSection";
import { BallotTitle } from "./BallotTitle";
import { Footer } from "./Footer";
import { Banner } from "./Banner";

import classes from "./BallotPage.module.scss";
import { withToastProvider } from "./toast/withToastProvider";

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
  const scopePickerData = useElectionScopePickerApi(electionApi, scope, ballotId);
  const ballotData = useBallotData(electionApi, completeness.complete ? ballotId : null, completeness.complete);

  const ballotList = useBallotList();
  const meta: ElectionBallotMeta | null = useMemo(() => {
    if (ballotData.data) return ballotData.data.meta;
    return ballotList.data?.find((x) => x.ballotId === ballotId) || null;
  }, [ballotData.data, ballotList.data, ballotId]);

  const shownData = completeness.complete ? ballotData.data : null;
  const shownScope = (completeness.complete && ballotData.data?.scope) || scope;

  const electionType = meta?.type;
  const isLive = meta?.live;
  const isCandidatesTab = location.pathname.includes("candidates");
  const showCandidatesTab = !!(isLive && (electionType === "house" || electionType === "senate"));
  const electionComptibleScope = electionType ? electionTypeCompatibleScopes(electionType) : undefined;
  const compatibleScopes = isCandidatesTab ? { locality: false } : electionComptibleScope;

  return (
    <>
      <Heading1>Momentan avem niște dificultăți tehnice în preluarea și prelucrarea datelor.</Heading1>
      <Heading3>Revenim curând.</Heading3>
      <p>Cele mai recente date agregate le găsiți în poza de mai jos.</p>
      <img src={screenLarge} alt="" className="img-fluid d-large" />
      <style>{".img-fluid { width: 100%; margin: 40px 0; } "}</style>
      {/* <Banner className={classes.banner} />
      {meta && meta?.live && (
        <DivLabel className={classes.updateInterval}>Datele se actualizează o dată la 60 secunde.</DivLabel>
      )}
      {meta && <BallotTitle meta={meta} onOpenSidebar={onOpenSidebar} />}
      <ElectionScopePicker
        value={scope}
        onChange={onScopeChange}
        apiData={scopePickerData}
        compatibleScopes={compatibleScopes}
      />
      {compatibleScopes && compatibleScopes[scope.type] === false && (
        <Redirect
          to={{
            ...location,
            search: prependQuestionMark(searchFromScope(electionScopeCoerceToCompatible(scope, compatibleScopes))),
          }}
        />
      )}
      <Label>Selectează de aici nivelul de vizualizare a datelor.</Label>
      <BallotTabs
        ballotId={ballotId}
        hasCapitalMayor={meta?.type === "mayor"}
        hasCandidates={showCandidatesTab}
        indicators={
          <div className={classes.indicators}>
            {ballotData.data && ballotData.loading && <Ellipsis color="#ffcc00" size={30} />}
          </div>
        }
      >
        <ErrorMessage error={ballotData.error} />
        {!ballotData.data && ballotData.loading && !completeness.complete ? (
          <Loader />
        ) : (
          <Switch>
            <Route path={`/elections/${ballotId}/turnout`}>
              <TurnoutTab
                meta={meta}
                ballot={shownData}
                scope={shownScope}
                onScopeChange={onScopeChange}
                loading={!shownData && ballotData.loading}
              />
            </Route>
            <Route path={`/elections/${ballotId}/results`}>
              <ResultsTab
                api={electionApi}
                meta={meta}
                ballot={shownData}
                scope={shownScope}
                onScopeChange={onScopeChange}
                loading={!shownData && ballotData.loading}
              />
            </Route>
            {showCandidatesTab && (
              <Route path={`/elections/${ballotId}/candidates`}>
                <CandidatesTab api={electionApi} meta={meta} scope={shownScope} />
              </Route>
            )}
            <Route>
              <Redirect to={`/elections/${ballotId}/turnout${prependQuestionMark(searchFromScope(shownScope))}`} />
            </Route>
          </Switch>
        )}
      </BallotTabs>
      {shownData?.electionNews && shownData.electionNews.length > 0 && (
        <NewsSection feed={shownData.electionNews} ballotId={ballotId} />
      )} */}
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
      {!collapsed && <style>{"html { background-color: #EFEFEF; } "}</style>}
      <div className={mergeClasses(classes.timelineSidebar, collapsed && sidebarOpen && classes.timelineSidebarOpen)}>
        <ElectionTimeline items={ballots} selectedBallotId={ballotId} onSelectBallot={onSelectBallot} />
      </div>
      <div className={classes.content}>
        {ballotId == null && ballots.length >= 1 && <Redirect to={`/elections/${ballots[0].ballotId}`} />}
        {ballotId != null && (
          <>
            <div className={classes.contentWrapper}>
              <BallotContent ballotId={ballotId} onOpenSidebar={collapsed ? onOpenSidebar : undefined} />
            </div>
            <Footer />
          </>
        )}
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      {collapsed && sidebarOpen && <div className={classes.tapToClose} onClick={onCloseSidebar} />}
    </div>
  );
};

export const BallotPage: React.FC = withToastProvider(() => {
  const ballotList = useBallotList();
  return (
    <>
      {!ballotList.hasData && ballotList.loading && <Loader />}
      <ErrorMessage error={ballotList.error} sideMargins />

      {ballotList.data && <SplitView ballots={ballotList.data} />}
    </>
  );
});
