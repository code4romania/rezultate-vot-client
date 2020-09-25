import React from "react";
import { useBallotFromRoute } from "../functions/urlState";

import { ResultsTab } from "./ResultsTab";

export const ResultsWidget: React.FC = () => {
  const { data } = useBallotFromRoute();

  if (!data) return null;

  return <ResultsTab meta={data.meta} ballot={data} scope={data.scope} />;
};
