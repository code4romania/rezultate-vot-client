import {
  ElectionBallot,
  ElectionBallotMeta,
  ElectionObservationSection,
  ElectionScopeIncomplete,
  ElectionScopeIncompleteResolved,
  ElectionTurnoutSection,
} from "@code4ro/reusable-components";
import React from "react";
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
      <ElectionTurnoutSection
        meta={meta}
        scope={scope}
        onScopeChange={onScopeChange}
        turnout={ballot?.turnout}
        loader={loading && <Loader />}
      />
      {ballot?.observation && <ElectionObservationSection observation={ballot.observation} />}
    </>
  );
};
