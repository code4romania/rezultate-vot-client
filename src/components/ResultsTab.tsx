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
  ElectionResultsDiscreteTableSection,
  Heading2,
  DivBody,
} from "@code4ro/reusable-components";
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
  if (
    (scope && meta && scope.type === "national" && meta.type === "mayor") ||
    (scope && meta && scope.type === "county" && meta.type === "mayor" && scope.countyId !== 12913) ||
    (scope && meta && scope.type === "national" && meta.type === "countycouncil_president") ||
    (scope && meta && scope.type === "county" && meta.type === "local_council") ||
    (scope && meta && scope.type === "national" && meta.type === "local_council") ||
    (scope && meta && scope.type === "national" && meta.type === "countycouncil")
  ) {
    let heading = "Nr Voturi";
    if (scope.type === "national" && meta.type === "countycouncil_president") {
      heading = "Nr președinți de consiliu județean";
    }
    if ((scope.type === "national" && meta.type === "mayor") || (scope.type === "county" && meta.type === "mayor")) {
      heading = "Nr Primari";
    }
    return <ElectionResultsDiscreteTableSection candidates={ballot?.results?.candidates} heading={heading} />;
  }

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
          <ElectionResultsTableSection meta={meta} results={ballot.results} />
        </>
      )}
    </EmbedButtonWrapper>
  );
};
