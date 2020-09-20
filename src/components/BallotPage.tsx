import React from "react";
import { useBallotList } from "./BallotListProvider";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import classes from "./BallotPage.module.scss";

export const BallotPage: React.FC = () => {
  const ballotList = useBallotList();
  return (
    <div className={classes.root}>
      {!ballotList.hasData && ballotList.loading && <Loader />}
      <ErrorMessage error={ballotList.error} sideMargins />
      {ballotList.hasData && JSON.stringify(ballotList.data, null, 2)}
    </div>
  );
};
