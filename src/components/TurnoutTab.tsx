import {
  ElectionBallot,
  ElectionBallotMeta,
  ElectionObservationSection,
  ElectionScopeIncomplete,
  ElectionScopeIncompleteResolved,
  ElectionTurnoutSection,
} from "@code4romania/reusable-components";
import React from "react";
import { EmbedButton, EmbedButtonWrapper } from "./EmbedButton";
import { Loader } from "./Loader";

type Props = {
  meta?: ElectionBallotMeta | null;
  ballot?: ElectionBallot | null;
  scope: ElectionScopeIncompleteResolved;
  onScopeChange?: (scope: ElectionScopeIncomplete) => unknown;
  loading?: boolean;
};

export const TurnoutTab: React.FC<Props> = ({ meta, ballot, scope, onScopeChange, loading }) => {
  return (
    <>
      <EmbedButtonWrapper>
        {meta && <EmbedButton path={`${meta.ballotId}/turnout`} />}
        <ElectionTurnoutSection
          scope={scope}
          onScopeChange={onScopeChange}
          turnout={ballot?.turnout}
          loader={loading && <Loader />}
        />
      </EmbedButtonWrapper>
      <EmbedButtonWrapper>
        {meta && <EmbedButton path={`${meta.ballotId}/observation`} />}
        {ballot?.observation && <ElectionObservationSection observation={ballot.observation} />}
      </EmbedButtonWrapper>
    </>
  );
};
