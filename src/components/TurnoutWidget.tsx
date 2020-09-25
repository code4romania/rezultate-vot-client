import React from "react";
import { ElectionTurnoutSection } from "@code4ro/reusable-components";
import { useBallotFromRoute } from "../functions/urlState";

export const TurnoutWidget: React.FC = () => {
  const { data } = useBallotFromRoute();

  if (!data) return null;

  return <ElectionTurnoutSection scope={data.scope} turnout={data.turnout} />;
};
