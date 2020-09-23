import {
  ElectionBallot,
  ElectionBallotMeta,
  ElectionObservationSection,
  ElectionScopeIncomplete,
  ElectionScopeIncompleteResolved,
  ElectionTurnoutSection,
} from "@code4ro/reusable-components";
import React from "react";

type Props = {
  meta?: ElectionBallotMeta | null;
  ballot?: ElectionBallot | null;
  scope: ElectionScopeIncompleteResolved;
  onScopeChange?: (scope: ElectionScopeIncomplete) => unknown;
};

export const TurnoutTab: React.FC<Props> = ({ meta, ballot, scope, onScopeChange }) => {
  return (
    <>
      <ElectionTurnoutSection meta={meta} scope={scope} onScopeChange={onScopeChange} turnout={ballot?.turnout} />
      {ballot?.observation && <ElectionObservationSection observation={ballot.observation} />}
    </>
  );
};
