import {
  ElectionAPI,
  ElectionBallotMeta,
  ElectionCandidatesTableSection,
  ElectionScopeIncomplete,
  DivBody,
  useApiResponse,
} from "@code4ro/reusable-components";
import React from "react";
import { Separator } from "./Separator";
import { EmbedButton, EmbedButtonWrapper } from "./EmbedButton";
import classes from "./CandidatesTab.module.scss";

type Props = {
  api: ElectionAPI;
  meta?: any;
  ballot?: any;
  scope: any;
  onScopeChange?: (scope: ElectionScopeIncomplete) => unknown;
  loading?: boolean;
};

export const CandidatesTab: React.FC<Props> = ({ api, meta, scope }) => {
  const { ballot: ballotName, ballotId } = meta || {};
  const { countyId } = scope || {};

  const { data } = useApiResponse(() => {
    return {
      invocation: (api && ballotId != null && api.getCandidates(ballotId, 2, countyId)) || undefined,
      discardPreviousData: true,
    };
  }, [api, ballotId, scope.type, scope.countyId]);

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
      {meta && <EmbedButton path={`${meta.ballotId}/candidates`} />}

      {data && meta && (
        <>
          <Separator className={classes.tablesSeparator} />
          <ElectionCandidatesTableSection heading="Partide" ballot={ballotName} parties={data} />
        </>
      )}
    </EmbedButtonWrapper>
  );
};
