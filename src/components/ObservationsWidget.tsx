import React from "react";
import { ElectionObservationSection } from "@code4ro/reusable-components";

import { useBallotFromRoute } from "../functions/urlState";

export const ObservationsWidget: React.FC = () => {
  const { data } = useBallotFromRoute();

  if (!data) return null;

  return (data && data?.observation && <ElectionObservationSection observation={data.observation} />) || null;
};
