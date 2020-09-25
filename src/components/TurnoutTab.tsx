import {
  ElectionBallot,
  ElectionObservationSection,
  ElectionScopeIncomplete,
  ElectionScopeIncompleteResolved,
  ElectionTurnoutSection,
} from "@code4ro/reusable-components";
import React from "react";
import { Loader } from "./Loader";

type Props = {
  ballot?: ElectionBallot | null;
  scope: ElectionScopeIncompleteResolved;
  onScopeChange?: (scope: ElectionScopeIncomplete) => unknown;
  loading?: boolean;
};

export const TurnoutTab: React.FC<Props> = ({ ballot, scope, onScopeChange, loading }) => {
  return (
    <>
      <ElectionTurnoutSection
        scope={scope}
        onScopeChange={onScopeChange}
        turnout={ballot?.turnout}
        loader={loading && <Loader />}
      />
      {ballot?.observation && <ElectionObservationSection observation={ballot.observation} />}
    </>
  );
};
