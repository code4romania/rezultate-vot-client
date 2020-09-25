import React from "react";
import { useBallotFromRoute } from "../functions/urlState";
import { useElectionApi } from "./ElectionAPIContext";

import { ResultsTab } from "./ResultsTab";

export const ResultsWidget: React.FC = () => {
  const { data } = useBallotFromRoute();
  const electionApi = useElectionApi();

  if (!data) return null;

  return <ResultsTab api={electionApi} meta={data.meta} ballot={data} scope={data.scope} />;
};
