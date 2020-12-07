import {
  ElectionAPI,
  ElectionBallotMeta,
  ElectionScopeIncomplete,
  ElectionCandidatesTableSection,
  useApiResponse,
  DivBody,
} from "@code4ro/reusable-components";
import React from "react";
import { Loader } from "./Loader";
import { EmbedButton, EmbedButtonWrapper } from "./EmbedButton";
import classes from "./CandidatesTab.module.scss";

type Props = {
  api: ElectionAPI;
  meta?: ElectionBallotMeta | null;
  scope: ElectionScopeIncomplete;
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
const parseCandidatesScope = (scope: any) => {
  if (scope.type === "locality" && !!scope.countyId) {
    return {
      type: "county",
      countyId: scope.countyId,
    };
  }
  if (scope.type === "diaspora_country") {
    return {
      type: "diaspora",
    };
  }
  return scope;
};

export const CandidatesTab: React.FC<Props> = ({ api, meta, scope }) => {
  const ballotName = meta?.ballot;
  const ballotId = meta?.ballotId;
  const scopeType = scope?.type;
  const countyId = (scope?.type === "county" || scope?.type === "locality") && scope?.countyId;
  const candidatesScope = parseCandidatesScope(scope);

  const { data, loading } = useApiResponse(() => {
    return {
      invocation: (api && ballotId != null && api.getCandidates(ballotId, candidatesScope)) || undefined,
      discardPreviousData: true,
    };
  }, [api, ballotId, candidatesScope.type, candidatesScope.countyId]);

  if (!(scopeType === "diaspora" || scopeType === "diaspora_country") && !countyId) {
    return (
      <DivBody className={classes.selectCountyIdMessage}>
        Pentru a vedea listele de candidati la nivelul fiecarui judet selecteaza cu ajutorul dropdown de mai sus ce
        judet te intereseaza.
      </DivBody>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <EmbedButtonWrapper>
      {meta && <EmbedButton path={`${meta.ballotId}/candidates`} />}

      {data && ballotName && (
        <>
          <ElectionCandidatesTableSection heading="Partide" parties={data} />
        </>
      )}
    </EmbedButtonWrapper>
  );
};
