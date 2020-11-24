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

export const CandidatesTab: React.FC<Props> = ({ api, meta, scope }) => {
  const ballotName = meta?.ballot;
  const ballotId = meta?.ballotId;
  const scopeType = scope?.type;
  const countyId = scope?.type === "county" && scope?.countyId;

  const candidatesScope = () => {
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

  const { data, loading } = useApiResponse(() => {
    return {
      invocation: (api && ballotId != null && api.getCandidates(ballotId, candidatesScope())) || undefined,
      discardPreviousData: true,
    };
  }, [api, ballotId, scopeType, countyId]);

  if (scopeType === "national" || (scopeType === "county" && !countyId)) {
    return (
      <DivBody className={classes.selectCountyIdMessage}>
        Pentru a vedea listele de candidati la nivelul fiecarui judet selecteaza cu ajutorul dropown de mai sus ce judet
        te intereseaza.
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
          <ElectionCandidatesTableSection heading="Partide" ballot={ballotName} parties={data} />
        </>
      )}
    </EmbedButtonWrapper>
  );
};
