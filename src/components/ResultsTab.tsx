import {
  ElectionBallot,
  ElectionBallotMeta,
  ElectionResultsProcess,
  ElectionResultsSeats,
  ElectionResultsSummarySection,
  ElectionResultsTableSection,
  ElectionScopeIncompleteResolved,
} from "@code4ro/reusable-components";
import React from "react";

type Props = {
  meta?: ElectionBallotMeta | null;
  ballot?: ElectionBallot | null;
  scope: ElectionScopeIncompleteResolved;
};

export const ResultsTab: React.FC<Props> = ({ meta, ballot, scope }) => {
  return (
    <>
      <ElectionResultsSummarySection meta={meta} scope={scope} results={ballot?.results} />
      {ballot?.results && <ElectionResultsProcess results={ballot.results} />}
      {ballot?.results && <ElectionResultsSeats results={ballot.results} />}
      {ballot?.results && meta && <ElectionResultsTableSection meta={meta} results={ballot.results} />}
    </>
  );
};
