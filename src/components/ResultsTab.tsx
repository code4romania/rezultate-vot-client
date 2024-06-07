import {
  ElectionBallot,
  ElectionBallotMeta,
  ElectionMapAPI,
  ElectionResultsProcess,
  ElectionResultsSeats,
  ElectionResultsSummarySection,
  ElectionResultsTableSection,
  ElectionScopeIncomplete,
  ElectionScopeIncompleteResolved,
  Heading2,
  DivBody,
} from "@code4romania/reusable-components";
import React from "react";
import { Separator } from "./Separator";
import { EmbedButton, EmbedButtonWrapper } from "./EmbedButton";
import { Loader } from "./Loader";
import classes from "./ResultsTab.module.scss";

type Props = {
  api: ElectionMapAPI;
  meta?: ElectionBallotMeta | null;
  ballot?: ElectionBallot | null;
  scope: ElectionScopeIncompleteResolved;
  onScopeChange?: (scope: ElectionScopeIncomplete) => unknown;
  loading?: boolean;
};

export const ResultsTab: React.FC<Props> = ({ api, meta, ballot, scope, onScopeChange, loading }) => {
  return (
    <EmbedButtonWrapper>
      {meta && meta.live && (
        <>
          <DivBody className={classes.processHeading}>
            Graficele arată procentele obținute de fiecare candidat pe măsură ce sunt numărate voturile. Datele se
            actualizează constant până la momentul afisării rezultatelor finale.
          </DivBody>
          <Separator />
        </>
      )}
      {meta && <EmbedButton path={`${meta.ballotId}/results`} />}
      <ElectionResultsSummarySection
        api={api}
        meta={meta}
        scope={scope}
        onScopeChange={onScopeChange}
        results={ballot?.results}
        separator={<Separator />}
        loader={loading && <Loader />}
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
          <ElectionResultsTableSection meta={meta} results={ballot.results} scope={scope} />
        </>
      )}
    </EmbedButtonWrapper>
  );
};
