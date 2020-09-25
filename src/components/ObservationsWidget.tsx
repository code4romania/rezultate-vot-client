/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useMemo } from "react";
import {
  ElectionBallotMeta,
  ElectionObservationSection,
  electionScopeIsComplete,
  mergeClasses,
  useBallotData,
  useDimensions,
} from "@code4ro/reusable-components";
import { useLocation, useRouteMatch } from "react-router-dom";

import { useBallotList } from "./BallotListProvider";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import { scopeFromSearch, toNumber } from "../functions/urlState";
import { useElectionApi } from "./ElectionAPIContext";

import classes from "./BallotPage.module.scss";
import { withToastProvider } from "./toast/withToastProvider";

const BallotContent: React.FC<{ ballotId: number; onOpenSidebar?: () => void }> = ({ ballotId }) => {
  const location = useLocation();

  const completeness = useMemo(() => {
    const s = scopeFromSearch(location.search);
    return electionScopeIsComplete(s);
  }, [location.search]);

  const electionApi = useElectionApi();
  const ballotData = useBallotData(electionApi, completeness.complete ? ballotId : null, completeness.complete);

  const shownData = completeness.complete ? ballotData.data : null;

  return (
    <>{shownData && shownData?.observation && <ElectionObservationSection observation={shownData.observation} />}</>
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
      <div className={classes.widgetContent}>{ballotId != null && <BallotContent ballotId={ballotId} />}</div>
    </div>
  );
};

export const ObservationsWidget: React.FC = withToastProvider(() => {
  const ballotList = useBallotList();
  return (
    <>
      {!ballotList.hasData && ballotList.loading && <Loader />}
      <ErrorMessage error={ballotList.error} sideMargins />
      {ballotList.data && <SplitView ballots={ballotList.data} />}
    </>
  );
});
