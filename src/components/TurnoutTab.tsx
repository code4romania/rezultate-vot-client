import {
  ElectionBallot,
  ElectionBallotMeta,
  ElectionObservationSection,
  ElectionScopeIncompleteResolved,
  ElectionTurnoutSection,
} from "@code4ro/reusable-components";
import React from "react";

type Props = {
  meta?: ElectionBallotMeta | null;
  ballot?: ElectionBallot | null;
  scope: ElectionScopeIncompleteResolved;
};

export const TurnoutTab: React.FC<Props> = ({ meta, ballot, scope }) => {
  return (
    <>
      <ElectionTurnoutSection meta={meta} scope={scope} turnout={ballot?.turnout} />
      {ballot?.observation && <ElectionObservationSection observation={ballot.observation} />}
    </>
  );
};
