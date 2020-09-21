import React, { useCallback } from "react";
import { ElectionBallotMeta, ElectionTimeline } from "@code4ro/reusable-components";
import { Redirect, useHistory, useLocation, useRouteMatch } from "react-router-dom";

import { useBallotList } from "./BallotListProvider";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import classes from "./BallotPage.module.scss";
import { toNumber } from "../functions/urlState";

const BallotContent: React.FC<{ ballotId: number }> = () => {
  return <span>Content!</span>;
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
