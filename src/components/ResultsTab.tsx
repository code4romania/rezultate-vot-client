import {
  ElectionBallot,
  ElectionBallotMeta,
  ElectionResultsProcess,
  ElectionResultsSeats,
  ElectionResultsSummarySection,
  ElectionResultsTableSection,
  ElectionScopeIncomplete,
  ElectionScopeIncompleteResolved,
  Heading2,
} from "@code4ro/reusable-components";
import React from "react";
import { Separator } from "./Separator";
import classes from "./ResultsTab.module.scss";
import { EmbedButton } from "./EmbedButton";

type Props = {
  meta?: ElectionBallotMeta | null;
  ballot?: ElectionBallot | null;
  scope: ElectionScopeIncompleteResolved;
  onScopeChange?: (scope: ElectionScopeIncomplete) => unknown;
};

export const ResultsTab: React.FC<Props> = ({ meta, ballot, scope, onScopeChange }) => {
  return (
    <div className="relative">
      <EmbedButton path={`${meta?.ballotId}/results`} />
      <ElectionResultsSummarySection
        meta={meta}
        scope={scope}
        onScopeChange={onScopeChange}
        results={ballot?.results}
        separator={<Separator />}
      />
      {ballot?.results && (
        <>
          <Separator />
          <Heading2 className={classes.processHeading}>Procesul electoral</Heading2>
          <ElectionResultsProcess className={classes.process} results={ballot.results} />
        </>
      )}
      {ballot?.results?.totalSeats != null && ballot.results.totalSeats >= 2 && (
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
    </div>
  );
};
