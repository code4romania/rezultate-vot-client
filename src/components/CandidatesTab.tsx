import {
  ElectionAPI,
  ElectionBallotMeta,
  ElectionScopeIncompleteResolved,
  ElectionCandidatesTableSection,
  useApiResponse,
  DivBody,
} from "@code4ro/reusable-components";
import React from "react";
import { Loader } from "./Loader";
import { EmbedButton, EmbedButtonWrapper } from "./EmbedButton";

type Props = {
  api: ElectionAPI;
  meta?: ElectionBallotMeta | null;
  scope: ElectionScopeIncompleteResolved;
};

export const CandidatesTab: React.FC<Props> = ({ api, meta, scope }) => {
  const ballotName = meta?.ballot;
  const ballotId = meta?.ballotId;
  const scopeType = scope?.type;
  const countyId = scope?.type === "county" && scope?.countyId;

  const { data, loading } = useApiResponse(() => {
    return {
      invocation: (api && ballotId != null && countyId && api.getCandidates(ballotId, 2, countyId)) || undefined,
      discardPreviousData: true,
    };
  }, [api, ballotId, scopeType, countyId]);

  if (!countyId) {
    return (
      <DivBody>
        Pentru a vedea listele de candidati la nivelul fiecarui judet selecteaza cu ajutorul dropdwn de mai sus ce judet
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
