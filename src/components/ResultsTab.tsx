import {
  ElectionBallot,
  ElectionBallotMeta,
  ElectionResultsProcess,
  ElectionResultsSeats,
  ElectionResultsSummarySection,
  ElectionResultsTableSection,
  ElectionScopeIncompleteResolved,
  Heading2,
} from "@code4ro/reusable-components";
import React from "react";
import { Separator } from "./Separator";
import classes from "./ResultsTab.module.scss";

type Props = {
  meta?: ElectionBallotMeta | null;
  ballot?: ElectionBallot | null;
  scope: ElectionScopeIncompleteResolved;
};

export const ResultsTab: React.FC<Props> = ({ meta, ballot, scope }) => {
  return (
    <>
      <ElectionResultsSummarySection meta={meta} scope={scope} results={ballot?.results} separator={<Separator />} />
      {ballot?.results && (
        <>
          <Separator />
          <Heading2 className={classes.processHeading}>Procesul electoral</Heading2>
          <ElectionResultsProcess className={classes.process} results={ballot.results} />
        </>
      )}
      {ballot?.results?.totalSeats && ballot.results.totalSeats >= 2 && (
        <>
          <Separator />
          <ElectionResultsSeats className={classes.seats} results={ballot.results} />
        </>
      )}
      {ballot?.results && meta && (
        <>
          <Separator className={classes.tablesSeparator} />
          <ElectionResultsTableSection meta={meta} results={ballot.results} />
        </>
      )}
    </>
  );
};
